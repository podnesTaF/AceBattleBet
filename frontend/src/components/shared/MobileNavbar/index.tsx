import React from 'react';
import styles from './MobileNavbar.module.css'
import Link from "next/link";
import {Routes} from "@/components/shared/Navbar";
import {useRouter} from "next/router";

const MobileNavbar = () => {
    const router = useRouter()

    return (
        <div className={styles.downNavbar}>
            {Routes.map((route, i) => (
                <li key={i}>
                    <Link className={route.pathname === router.pathname ? styles.active : ''} href={route.pathname}>
                        {route.name}
                    </Link>
                </li>
            ))}
        </div>
    );
};

export default MobileNavbar;
