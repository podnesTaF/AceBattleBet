import React from 'react';
import styles from "@/components/competition/MatchCard/MatchCard.module.css";
import {IMatch} from "@/utils/types/match";

interface MatchTeamProps {
    match: IMatch;
    team: 'team_one' | 'team_two'
}

const MatchTeam: React.FC<MatchTeamProps> = ({match, team}) => {
    return (
        <div className={styles.item}>
            <h2 className={styles.itemTitle}>{match[team].attributes.name}</h2>
            <h3>Coach: {match[team].attributes.coach.data.attributes.name} {match[team].attributes.coach.data.attributes.surname}</h3>
            <h3>Players:</h3>
            <ul>
                {match[team].attributes.players.data.map((player: any) => (
                    <li>{player.attributes.name} {player.attributes.surname}</li>
                ))}
            </ul>
        </div>
    );
};

export default MatchTeam;
