import * as React from 'react';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {FormField} from "@/components/form/FormField";
import {Alert} from "@mui/material";
import {LoginFormSchema} from "@/utils/formValidator";
import {Api} from "@/api";
import {setCookie} from "nookies";
import { setUserData } from '@/store/slices/userSlice';
import {useAppDispatch} from "@/hooks/useAppHooks";
import {useRouter} from "next/router";

export default function LoginForm() {
    const dispatch = useAppDispatch();
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter()

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginFormSchema),
    });
    const onSubmit = async (dto: any) => {
        try {
            const data = await Api().user.login(dto)
            setCookie(null, 'authToken', data.jwt, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });

            setErrorMessage('');
            dispatch(setUserData(data.user));

            router.push('/')
        } catch (err: any) {
            console.log(err)
            setErrorMessage(err.response?.data?.message)
        }
    };

    return (
        <FormProvider {...form}>
            <Box component="form" onSubmit={form.handleSubmit(onSubmit)} sx={{mt: 2}}>
                <Grid item xs={12}>
                    <FormField
                        label="Email or Username"
                        name="identifier"
                        margin={'normal'}
                        type="text"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormField
                        margin={'normal'}
                        name="password"
                        label="Password"
                        type="password"
                    />
                </Grid>
                <Grid item xs={12}>
                    {errorMessage && (
                        <Alert severity="error" className="mb-20">
                            {errorMessage}
                        </Alert>
                    )}
                </Grid>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    disabled={!form.formState.isValid || form.formState.isSubmitting}
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href="/auth/register">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </FormProvider>
    );
}
