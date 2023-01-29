import React, {useState} from 'react';
import MainLayout from "@/layouts/MainLayout";

interface AuthLayoutProps {
children: React.ReactNode,
type: 'login' | 'register'
}

const AuthLayout: React.FC<AuthLayoutProps> = ({children, type}) => {
    const [formType, setFormType] = useState<'login' | 'register'>(
        'login')

    return (
        <MainLayout rightSideBarHidden={true}>
            <div className='flex h-screen justify-center items-center bg-black'>
                <h1 className='text-4xl capitalize font bold mb-6'>{formType}</h1>

            </div>
        </MainLayout>
    );
};

export default AuthLayout