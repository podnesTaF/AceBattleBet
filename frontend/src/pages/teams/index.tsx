import React, {useEffect} from 'react';
import MainLayout from "@/layouts/MainLayout";
import {ITeam} from "@/utils/types/teams";
import {Api} from "@/api";
import TeamsList from "@/components/teams/TeamsList";

const TeamsPage = () => {
    const [teams, setTeams] = React.useState<ITeam[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const data = await Api().team.getAll()
                setTeams(data)
            } catch (e) {
                console.log(e)
            }
        })()
    },[])

    return (
        <MainLayout>
            <h1 className='title'>Teams</h1>
            <TeamsList teams={teams} />
        </MainLayout>
    );
};

export default TeamsPage;
