import React from 'react';
import styles from './RightSidebar.module.css'
import {Card} from "@mui/material";

interface RightSideBarProps {
    isHidden?: boolean;
}
const RightSideBar: React.FC<RightSideBarProps> = ({isHidden}) => {
    return (
        <div className={styles.container} style={{display: isHidden ? 'none' : 'block'}}>
            <div className={`${isHidden && 'hidden'}`}>
                <h1>Your Recently Bets</h1>
                <Card className='card'>
                    <p>Enter your account to see your bets</p>
                </Card>
            </div>
        </div>
    );
};

export default RightSideBar;