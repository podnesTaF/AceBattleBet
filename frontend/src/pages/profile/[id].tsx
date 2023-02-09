import React from 'react';
import MainLayout from "@/layouts/MainLayout";
import ProfileInfo from "@/components/user/ProfileInfo";
import {useAppSelector} from "@/hooks/useAppHooks";
import {selectUserData} from "@/store/slices/userSlice";
import {GetServerSideProps, NextPage} from "next";
import {Api} from "@/api";
import {IBet} from "@/utils/types/bet";
import UserStat from "@/components/user/UserStat";
import Button from "@mui/material/Button";
import {useFetchFullUserBetsQuery} from "@/services/BetsService";
import BetTable from "@/components/user/BetTable";

interface ProfilePageProps {
    bets: IBet[]
}

const ProfilePage: NextPage<ProfilePageProps> = ({bets}) => {
    const userData = useAppSelector(selectUserData)
    const [page, setPage] = React.useState<number>(1);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(8);
    const {data: data, error, isLoading} = useFetchFullUserBetsQuery([userData?.id, page, rowsPerPage])

    return (
        <MainLayout rightSideBarHidden={true}>
            <h1 className='title'>Profile</h1>
            {userData && data &&
              <>
                  <div className='profile'>
                      <ProfileInfo user={userData}/>
                      <UserStat bets={bets} />
                      <Button className='profile__balance' variant={"outlined"} color={'primary'}>
                          {userData.balance || 0} $
                      </Button>
                  </div>
                  <BetTable setPage={setPage} page={page} rowsPerPage={rowsPerPage} bets={data.data} total={data.meta.pagination.total} />
              </>
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