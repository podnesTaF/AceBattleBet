import React from 'react';
import Navbar from "@/components/shared/Navbar/index";
import SideBar from "@/components/shared/Sidebar/index";
import RightSideBar from "@/components/shared/RightSidebar/index";
import {Container} from "@mui/material";


interface MainLayoutProps {
    rightSideBarHidden?: boolean;
    children: React.ReactNode
}
const MainLayout: React.FC<MainLayoutProps> = ({children, rightSideBarHidden}) => {
    return (
        <>
            <Navbar />
            <div className='wrapper'>
                <SideBar />
                <div>
                    {children}
                </div>
                <RightSideBar isHidden={rightSideBarHidden} />
            </div>
        </>
    );
};

export default MainLayout;
