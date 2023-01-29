import React from 'react';
import {ITeam} from "@/utils/types/teams";
import {Container} from "@mui/material";
import styles from './TeamsList.module.css';
import TeamItem from "@/components/teams/TeamItem";

interface TeamsListProps {
    teams: ITeam[];
}

const TeamsList: React.FC<TeamsListProps> = ({teams}) => {
    return (
        <section className={styles.container}>
            {teams.map((team) => (
                <TeamItem key={team.id} name={team.attributes.name} country={team.attributes.country} players={team.attributes.players.data} />
            ))}
        </section>
    );
};

export default TeamsList;
