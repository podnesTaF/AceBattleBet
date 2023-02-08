import React from 'react';
import Image from "next/image";
import styles from './Navbar.module.css'
import {Button} from '@mui/material';
import {useRouter} from "next/router";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/hooks/useAppHooks";
import {deleteUserData, selectUserData} from "@/store/slices/userSlice";
import {destroyCookie} from "nookies";
import PersonIcon from '@mui/icons-material/Person';
import AddCardIcon from '@mui/icons-material/AddCard';
import LogoutIcon from '@mui/icons-material/Logout';
import AddBalance from "@/components/shared/AddBalance";

const Navbar = () => {
    const router = useRouter()
    const userData = useAppSelector(selectUserData)
    const dispatch = useAppDispatch();
    const [open, setOpen] = React.useState(false);
    const logout = () => {
        destroyCookie(null, 'authToken')
        dispatch(deleteUserData());
        router.push('/')
    }

    return (
        <header className={styles.header}>
            <Link href={'/'}>
                <Image src="/main-logo-abb.svg" alt="main-logo" height={100} width={300}/>
            </Link>
            <ul className={styles.first}>
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
                <li>
                    <Link href={'/competitions'}>
                        Competitions
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
                <>
                    <ul>
                        <li className={styles.balance}>
                            <h4>{userData.balance} $</h4>
                        </li>
                        <li>
                            <Button onClick={() => setOpen(true)} variant='outlined'
                                    color='primary'>
                                <AddCardIcon />
                            </Button>
                        </li>
                        <li>
                            <Button
                                onClick={() => router.push(`/profile/${userData.id}`)}
                                variant='contained' color='secondary'>
                                <PersonIcon />
                            </Button>
                        </li>
                        <li>
                            <Button onClick={logout} variant="contained"
                                    color='error'>
                                <LogoutIcon />
                            </Button>
                        </li>
                    </ul>
                    <AddBalance open={open} setOpen={setOpen} />
                </>

            )}
        </header>
    );
};

export default Navbar;