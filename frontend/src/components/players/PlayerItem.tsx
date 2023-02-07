import React from 'react';
import {IPlayer} from "@/utils/types/teams";
import styles from './PlayerItem.module.css'
import Avatar from "@mui/material/Avatar";
import {getMin} from "@/utils/time";

interface PlayerItemProps {
    player: IPlayer
}

const PlayerItem: React.FC<PlayerItemProps> = ({player}) => {
    return (
        <>
            <tr className={styles.info}>
                <td>{player.id}</td>
                <td>{player.attributes.name}</td>
                <td>{player.attributes.surname}</td>
                <td>{player.attributes.team.data.attributes.name}</td>
                <td>{player.attributes.nationality}</td>
                <td>{player.attributes.dateOfBirth}</td>
                <td>{player.attributes.team.data.attributes.coach.data.attributes.name} {player.attributes.team.data.attributes.coach.data.attributes.surname}</td>
                <td className={styles.details}>Details</td>
            </tr>
            <div className={styles.extendedInfo}>
                <div className={styles.extendedHead}>
                    <h3>Player's Personal Bests:</h3>
                    <h3 className={styles.category}>Category: {player.attributes.category}</h3>
                </div>
                <div className={styles.pbsList}>
                    {player.attributes.pbs.map((pb, index) => (
                        <div key={pb.id} className={styles.pbsItem}>
                            <h4>{pb.distance}</h4>
                            <p>{getMin(pb.time)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PlayerItem;
