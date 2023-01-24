import React from 'react';

const RightSideBar = () => {
    return (
        <div className='p-5 text-white bg-black h-screen sticky top-0'>
            <h1 className='text-3xl font-bold'>Your Recently Bets</h1>
            <div className='flex h-28 items-center justify-center'>
                <p>Enter your account to see your bets</p>
            </div>
        </div>
    );
};

export default RightSideBar;
