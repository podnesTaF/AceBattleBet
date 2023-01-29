import React from 'react';
import {IPlayer} from "@/utils/types/teams";
import styles from './PlayerList.module.css'
import PlayerItem from "@/components/players/PlayerItem";
interface PlayerListProps {
    players: IPlayer[]
}

const PlayerList: React.FC<PlayerListProps> = ({players}) => {
    return (
        <div className={styles.playerList}>
            {players.map((player) => (
                <PlayerItem player={player} key={player.id} />
            ))}
        </div>
    );
};

export default PlayerList;
