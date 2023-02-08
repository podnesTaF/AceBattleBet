import React from 'react';
import {IUser} from "@/utils/types/user";
import styles from './ProfileInfo.module.css';
import Avatar from "@mui/material/Avatar";

interface ProfileInfoProps {
    user: IUser
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({user}) => {
    return (
            <div className={styles.profile}>
                <Avatar className={styles.avatar}>{user.username[0]}</Avatar>
                <div className={styles.info}>
                    <div className={styles.infoItem}>
                        <h3>Email:</h3>
                        <p>{user.email}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h3>Full Name:</h3>
                        <p>{user.username}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h3>Date of Birth:</h3>
                        <p>{user.dateOfBirth}</p>
                    </div>
                </div>
            </div>
    );
};

export default ProfileInfo;
