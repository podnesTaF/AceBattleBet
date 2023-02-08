import React from 'react';
import Navbar from "@/components/shared/Navbar/index";
import SideBar from "@/components/shared/Sidebar/index";
import RightSideBar from "@/components/shared/RightSidebar/index";


interface MainLayoutProps {
    rightSideBarHidden?: boolean;
    sideBarHidden?: boolean;
    children: React.ReactNode

    variant?: 'light' | 'dark';
}
const MainLayout: React.FC<MainLayoutProps> = ({children, rightSideBarHidden, sideBarHidden, variant}) => {
    return (
        <div className='full'>
            <div className='right-stripe'>
            </div>
            <div className='main'>
                <Navbar />
                <div className='wrapper'>
                    <SideBar isHidden={sideBarHidden} />
                    <div style={{width: '100%'}}>
                        {children}
                    </div>
                    <RightSideBar isHidden={rightSideBarHidden} />
                </div>
            </div>
        </div>
    );
};
export default MainLayout;
