import React from 'react';
import Navbar from "@/components/shared/Navbar/index";
import SideBar from "@/components/shared/Sidebar/index";
import RightSideBar from "@/components/shared/RightSidebar/index";
import {Container} from "@mui/material";


interface MainLayoutProps {
    rightSideBarHidden?: boolean;
    sideBarHidden?: boolean;
    children: React.ReactNode
}
const MainLayout: React.FC<MainLayoutProps> = ({children, rightSideBarHidden, sideBarHidden}) => {
    return (
        <>
            <Navbar />
            <div className='wrapper'>
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
