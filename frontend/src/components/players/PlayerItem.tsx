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
        <div className={styles.playerItem}>
            <div className={styles.playerItem__img}>
                <Avatar>
                    {player.attributes.name[0]}
                </Avatar>
            </div>
            <div className={styles.playerItem__info}>
                <h3>{player.attributes.name} {player.attributes.surname}</h3>
                <p>{player.attributes.dateOfBirth}</p>
            </div>
            <div className={styles.playerItem__stat}>
                {player.attributes.pbs.map((pb, index) => (
                    <div key={index} className={styles.playerItem__stat_item}>
                        <h3>{pb.distance} m : {getMin(pb.time)}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayerItem;
