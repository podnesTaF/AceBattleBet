import React from 'react';
import LoginForm from "@/components/auth/LoginForm";
import MainLayout from "@/layouts/MainLayout";
import AuthWrapper from "@/components/auth/AuthWrapper";

const Login = () => {
    return (
        <MainLayout rightSideBarHidden={true} variant={'light'}>
            <AuthWrapper formType={'login'}>
                <LoginForm />
            </AuthWrapper>
        </MainLayout>
    );
};

export default Login;
