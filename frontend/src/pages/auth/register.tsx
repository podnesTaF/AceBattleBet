import React from 'react';
import AuthWrapper from "@/components/auth/AuthWrapper";
import MainLayout from "@/layouts/MainLayout";
import RegisterForm from '@/components/auth/RegisterForm';

const Register = () => {
    return (
        <MainLayout rightSideBarHidden={true}>
            <AuthWrapper formType={'register'}>
                <RegisterForm />
            </AuthWrapper>
        </MainLayout>
    );
};

export default Register;
