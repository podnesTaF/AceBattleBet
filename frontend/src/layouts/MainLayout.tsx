import React from 'react';
import Navbar from "@/components/shared/Navbar/index";
import SideBar from "@/components/shared/Sidebar/index";
import RightSideBar from "@/components/shared/RightSidebar/index";
import {Container} from "@mui/material";
import {GetServerSideProps} from "next";
import {Api} from "@/api";
import {IBet} from "@/utils/types/bet";


interface MainLayoutProps {
    rightSideBarHidden?: boolean;
    sideBarHidden?: boolean;
    children: React.ReactNode

    variant?: 'light' | 'dark';
}
const MainLayout: React.FC<MainLayoutProps> = ({children, rightSideBarHidden, sideBarHidden, variant}) => {
    return (
        <>
            <Navbar />
            <div className='wrapper' style={{backgroundColor: variant === 'light' ? "white" : 'black'}}>
                <SideBar isHidden={sideBarHidden} />
                <div style={{width: '100%'}}>
                    {children}
                </div>
                <RightSideBar isHidden={rightSideBarHidden} />
            </div>
        </>
    );
};
export default MainLayout;
