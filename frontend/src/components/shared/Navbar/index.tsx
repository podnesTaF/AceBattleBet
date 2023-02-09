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

const Routes = [
    {
        name: 'Teams',
        pathname: '/teams'
    },
    {
        name: 'Players',
        pathname: '/players'
    },
    {
        name: 'Competitions',
        pathname: '/competitions'
    }
]

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
                <Image src="/main-logo-abb.png" alt="main-logo" height={100} width={300}/>
            </Link>
            <ul className={styles.first}>
                {Routes.map((route, i) => (
                    <li key={i}>
                        <Link className={route.pathname === router.pathname ? styles.active : ''} href={route.pathname}>
                            {route.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {!userData ? (
                <ul>
                    <li>
                        <Button onClick={() => router.push('/auth/login')} variant="outlined"
                                color='primary'>Login</Button>
                    </li>
                    <li>
                        <Button onClick={() => router.push('/auth/register')} variant='contained' color='primary'>
                            Register
                        </Button>
                    </li>
                </ul>
            ) : (
                <>
                    <ul>
                        <li className={styles.balance}>
                            <h4>{userData.balance || 0} $</h4>
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