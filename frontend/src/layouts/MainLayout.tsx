import React from 'react';
import Navbar from "@/components/shared/Navbar";
import SideBar from "@/components/shared/SideBar";
import RightSideBar from "@/components/shared/RightSideBar";


interface MainLayoutProps {
    children: React.ReactNode
}
const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return (
        <>
            <Navbar />
            <div className='flex justify-between'>
                <SideBar />
                <div>
                    {children}
                </div>
                <RightSideBar />
            </div>
        </>
    );
};

export default MainLayout;
