import React from 'react';
import Image from "next/image";
import Button from "@/components/shared/Button";

const Navbar = () => {
    return (
        <header className='flex justify-between bg-stone-900 h-15 items-center'>
            <Image src="/main-logo-abb.png" alt="main-logo" height={100} width={300} />
            <ul className='flex justify-between w-1/6'>
                <li className='text-3xl font-bold text-white mr-3'>Teams</li>
                <li className='text-3xl font-bold text-white'>Players</li>
            </ul>
            <ul className='flex m-3'>
                <li className='mr-6'>
                    <Button variant='gold' size='md'>
                        Login
                    </Button>
                </li>
                <li className='mr-6'>
                    <Button variant='red' size='md'>
                        Register
                    </Button>
                </li>
            </ul>
        </header>
    );
};

export default Navbar;
