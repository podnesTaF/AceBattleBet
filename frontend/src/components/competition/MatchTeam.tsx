import React from 'react';
import styles from "@/components/competition/MatchCard/MatchCard.module.css";
import {ResponseMatch} from "@/models/match";

interface MatchTeamProps {
    match: ResponseMatch;
    team: 'team_one' | 'team_two',
}

const MatchTeam: React.FC<MatchTeamProps> = ({match, team}) => {
    return (
        <div className={styles.item}>
            <h2 className={styles.itemTitle}>{match.attributes[team].data.attributes.name}</h2>
            <h3>Coach: {match.attributes[team].data.attributes.coach.data.attributes.name} {match.attributes[team].data.attributes.coach.data.attributes.surname}</h3>
            <h3>Players:</h3>
            <ul>
                {match.attributes[team].data.attributes.players.data.map((player: any) => (
                    <li key={player.id}>{player.attributes.name} {player.attributes.surname}</li>
                ))}
            </ul>
        </div>
    );
};

export default MatchTeam;
