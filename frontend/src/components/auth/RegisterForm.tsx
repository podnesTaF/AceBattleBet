import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useState} from "react";
import {LoginFormSchema, RegisterSchema} from "@/utils/formValidator";
import {FormProvider, useForm, useFormContext} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Alert} from "@mui/material";
import {FormField} from "@/components/form/FormField";
import {Api} from "@/api";
import {CreateUserDto} from "@/utils/types/user";
import {setCookie} from "nookies";
import {useAppDispatch} from "@/hooks/useAppHooks";
import {setUserData} from "@/store/slices/userSlice";
import {useRouter} from "next/router";

export default function SignUp() {
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useAppDispatch();
    const router = useRouter();

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterSchema),
    });


    const onSubmit = async (dto: any) => {
        if (!dto) {
            setErrorMessage('something went wrong')
        }

        try {
            const data = await Api().user.register(dto)
            setCookie(null, 'authToken', data.jwt, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });
            setErrorMessage('');
            dispatch(setUserData(data.user));
            router.push('/')
        } catch (e: any) {
            setErrorMessage(e.response.data.message)
        }
    };

    return (
        <FormProvider {...form}>
            <Grid component='form' onSubmit={form.handleSubmit(onSubmit)} sx={{mt: 2}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <FormField
                            label="Username"
                            name="username"
                            type="text"
                        />
                    <Grid item marginTop={2} xs={12} sm={12}>
                        <FormField
                            name="dateOfBirth"
                            label="Date of Birth"
                            type="date"
                        />
                    </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <FormField
                            label="Email Address"
                            name="email"
                            type="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormField
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
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    disabled={!form.formState.isValid || form.formState.isSubmitting}
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="/auth/login">
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </FormProvider>
    );
}