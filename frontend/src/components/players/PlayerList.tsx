import React from 'react';
import {IPlayer} from "@/utils/types/teams";
import styles from './PlayerList.module.css'
import {getMin} from "@/utils/time";
import PlayerItem from "@/components/players/PlayerItem";
interface PlayerListProps {
    players: IPlayer[]
}

const PlayerList: React.FC<PlayerListProps> = ({players}) => {

    return (
        <div className={styles.playerList}>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Club</th>
                        <th>Nationality</th>
                        <th>DOB</th>
                        <th>Coach</th>
                        <th>PBS</th>
                    </tr>
                </ thead>
                <tbody>
                    {players.map((player, index) => (
                       <PlayerItem key={player.id} player={player} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlayerList;
