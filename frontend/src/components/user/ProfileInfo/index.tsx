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
                    <h3 className={styles.username}>{user.username}</h3>
                    <p className={styles.email}>{user.email}</p>
                    <p className={styles.dob}>
                        <span>Date of birth: </span>
                        {user.dateOfBirth}
                    </p>
                </div>
            </div>
    );
};

export default ProfileInfo;
