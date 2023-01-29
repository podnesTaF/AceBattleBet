import React, {useState} from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {Box, Container} from "@mui/material";
import Typography from "@mui/material/Typography";

interface AuthWrapperProps {
    children: React.ReactNode;
    formType: 'login' | 'register';
}
const AuthWrapper: React.FC<AuthWrapperProps> = ({formType, children}) => {

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    {formType === 'login' ? 'Sign in' : 'Sign up'}
                </Typography>
            </Box>
            {children}
        </Container>
    );
};

export default AuthWrapper;
