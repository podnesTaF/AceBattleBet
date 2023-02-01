import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app'
import {theme} from "@/utils/mui-theme";
import {wrapper} from "@/store";
import {Api} from "@/api";
import {setUserData} from "@/store/slices/userSlice";
import React from "react";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
          <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

App.getInitialProps = wrapper.getInitialAppProps(
    (store) =>
        async ({ ctx, Component }) => {
            try {
                const userData = await Api(ctx).user.getMe();
                store.dispatch(setUserData(userData));
            } catch (err) {
                if (ctx.asPath === '/write') {
                    ctx.res?.writeHead(302, {
                        location: '/403',
                    });
                    ctx.res?.end();
                }
                console.log(err);
            }
            return {
                pageProps: {
                    ...(Component.getInitialProps
                        ? await Component.getInitialProps({ ...ctx, store })
                        : {}),
                },
            };
        }
);

export default wrapper.withRedux(App);