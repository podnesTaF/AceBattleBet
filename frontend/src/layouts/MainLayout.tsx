import React, {useEffect} from 'react';
import Navbar from "@/components/shared/Navbar/index";
import SideBar from "@/components/shared/Sidebar/index";
import RightSideBar from "@/components/shared/RightSidebar/index";
import MobileNavbar from "@/components/shared/MobileNavbar";
import {useIsMobile} from "@/hooks/useIsMobile";


interface MainLayoutProps {
    rightSideBarHidden?: boolean;
    sideBarHidden?: boolean;
    children: React.ReactNode

    variant?: 'light' | 'dark';
}
const MainLayout: React.FC<MainLayoutProps> = ({children, rightSideBarHidden, sideBarHidden, variant}) => {
    const isMobile = useIsMobile();

    return (
        <div className='full'>
            <div className='right-stripe'>
            </div>
            <div className='main'>
                <Navbar />
                <div className='wrapper' style={{paddingRight: rightSideBarHidden ? 0 : 40}}>
                    {!isMobile && <SideBar isHidden={sideBarHidden}/>}
                    <div style={{width: '100%'}}>
                        {children}
                    </div>
                    {!isMobile && <RightSideBar isHidden={rightSideBarHidden}/>}
                </div>
            </div>
            {isMobile && <RightSideBar isHidden={rightSideBarHidden} />}
            {isMobile && <MobileNavbar />}
        </div>
    );
};
export default MainLayout;
