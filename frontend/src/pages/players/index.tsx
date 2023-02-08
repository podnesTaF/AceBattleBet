import React from 'react';
import MainLayout from "@/layouts/MainLayout";
import PlayerList from "@/components/players/PlayerList";
import {NextPage} from "next";

const PlayersPage: NextPage = () => {
    return (
        <MainLayout>
            <h1 className='title'>Battle Mile Players</h1>
            <PlayerList />
        </MainLayout>
    );
};

export default PlayersPage;
