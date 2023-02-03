import React from 'react';
import MainLayout from "@/layouts/MainLayout";
import PlayerList from "@/components/players/PlayerList";
import {GetServerSideProps, NextPage} from "next";
import {Api} from "@/api";
import {IPlayer} from "@/utils/types/teams";

interface PlayerPageProps {
    players: IPlayer[]
}

const PlayersPage: NextPage<PlayerPageProps> = ({players}) => {
    return (
        <MainLayout>
            <h1 className='title'>Battle Mile Players</h1>
            <PlayerList players={players} />
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try {
        const players = await Api(ctx).player.getAll()
        return {
            props: {
                players
            }
        }
    } catch (err) {
        console.log('Players page', err)
        return {
            props: {

            }
        }
    }
}

export default PlayersPage;
