import React from 'react';
import {ITeam} from "@/utils/types/teams";
import styles from './MatchTeamStat.module.css'
import {getMin} from "@/utils/time";
import {getMilePb} from "@/utils/distance";

interface MatchTeamStatProps {
    team: ITeam;
}

const MatchTeamStat: React.FC<MatchTeamStatProps> = ({team}) => {

    return (
        <div className={styles.stat}>
            <h3>{team.attributes.name}</h3>
            <div className={styles.stat_info}>
                <div className={styles.stat_info_item}>
                    <h4>Battle won</h4>
                    <h4>Battle lose</h4>
                    <h4>Win rate</h4>
                </div>
                <div className={styles.stat_info_res}>
                    <p>5</p>
                    <p>3</p>
                    <p>{((3 / 5) * 100).toFixed(1)}%</p>
                </div>
            </div>
            <div className={styles.stat_info}>
                <div className={styles.stat_info_item}>
                    <h4>Coach</h4>
                </div>
                <div className={styles.stat_info_res}>
                    <p>{team.attributes.coach.data.attributes.name} {team.attributes.coach.data.attributes.surname}</p>
                </div>
            </div>
            <h2>Players</h2>
            <div className={styles.stat_info}>
                <div className={styles.stat_info_item}>
                    <h4>Name</h4>
                    <h4>DOB</h4>
                    <h4>PB 1mile</h4>
                </div>
                {team.attributes.players.data.map((player) => (
                    <div key={player.id} className={styles.stat_info_res}>
                        <p>{player.attributes.name} {player.attributes.surname}</p>
                        <p>{player.attributes.dateOfBirth}</p>
                        {
                            player.attributes.pbs.length ? getMilePb(player.attributes.pbs) : <p>debut</p>
                         }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MatchTeamStat;
