import React from 'react';
import {IPlayer} from "@/utils/types/teams";
import StarBorderIcon from '@mui/icons-material/StarBorder';

import styles from './TeamItem.module.css';

interface TeamItemProps {
    name: string;
    country: string;
    players: IPlayer[];
}

const TeamItem: React.FC<TeamItemProps> = ({players, country, name}) => {
    return (
        <section className={styles.card}>
            <article className={styles.container}>
                <h2>{name}</h2>
                <p>{country}</p>
                <ul className={styles.playerList}>
                    {players.map((player) => (
                        <li key={player.id}>
                            <h3>{player.attributes.name} {player.attributes.surname} {player.attributes.isJocker && <StarBorderIcon />}</h3>
                            <p>{player.attributes.dateOfBirth}</p>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
};

export default TeamItem;
