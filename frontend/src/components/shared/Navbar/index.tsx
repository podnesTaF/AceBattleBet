import React from 'react';
import Image from "next/image";
import styles from './Navbar.module.css'
import {Button} from '@mui/material';
import {useRouter} from "next/router";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/hooks/useAppHooks";
import {deleteUserData, selectUserData} from "@/store/slices/userSlice";
import {destroyCookie} from "nookies";

const Navbar = () => {
    const router = useRouter()
    const userData = useAppSelector(selectUserData)
    const dispatch = useAppDispatch();
    const logout = () => {
        destroyCookie(null, 'authToken')
        dispatch(deleteUserData());
        router.push('/')
    }

    return (
        <header className={styles.header}>
            <Link href={'/'}>
                <Image src="/main-logo-abb.png" alt="main-logo" height={100} width={300}/>
            </Link>
            <ul>
                <li>
                    <Link href={'/teams'}>
                        Teams
                    </Link>
                </li>
                <li>
                    <Link href={'/players'}>
                        Players
                    </Link>
                </li>
            </ul>
            {!userData ? (
                <ul>
                    <li>
                        <Button onClick={() => router.push('/auth/login')} variant="contained"
                                color='warning'>Login</Button>
                    </li>
                    <li>
                        <Button onClick={() => router.push('/auth/register')} variant='contained' color='error'>
                            Register
                        </Button>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <Button onClick={logout} variant="contained"
                                color='warning'>Logout</Button>
                    </li>
                    <li>
                        <Button
                            onClick={() => router.push(`/profile/${userData.id}`)}
                            variant='contained' color='error'>
                            Profile
                        </Button>
                    </li>
                </ul>
            )}
        </header>
    );
};

export default Navbar;