import React from 'react';
import MainLayout from "@/layouts/MainLayout";
import ProfileInfo from "@/components/user/ProfileInfo";
import {useAppSelector} from "@/hooks/useAppHooks";
import {selectUserData} from "@/store/slices/userSlice";
import BetsStat from "@/components/user/BetsStat";
import {GetServerSideProps, NextPage} from "next";
import {Api} from "@/api";
import {IBet} from "@/utils/types/bet";

interface ProfilePageProps {
    bets: IBet[]
}

const ProfilePage: NextPage<ProfilePageProps> = ({bets}) => {

    const userData = useAppSelector(selectUserData)

    return (
        <MainLayout>
            {userData &&
               <div className='profile'>
                   <ProfileInfo user={userData}/>
                    <BetsStat bets={bets} />
               </div>
            }
        </MainLayout>
    );
};

export const getServerSideProps:GetServerSideProps  = async (ctx) => {
    try {
        const id = ctx?.params?.id || 1

        const bets = await Api().bets.getBetsByUser(+id)

        return {
            props: {
                bets
            }
        }
    } catch (e: any) {
        console.log('profile page', e)
        return {
            props: {}
        }
    }
}

export default ProfilePage;