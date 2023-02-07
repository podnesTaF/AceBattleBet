import React from 'react';
import {IPlayer} from "@/utils/types/teams";
import styles from './PlayerList.module.css'
import {getMin} from "@/utils/time";
import PlayerItem from "@/components/players/PlayerItem";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
interface PlayerListProps {
    players: IPlayer[]
}

const PlayerList: React.FC<PlayerListProps> = ({players}) => {

    return (
        <TableContainer className={styles.playerList}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell>Rank</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Surname</TableCell>
                        <TableCell>Club</TableCell>
                        <TableCell>Nationality</TableCell>
                        <TableCell>DOB</TableCell>
                        <TableCell>Coach</TableCell>
                        <TableCell>PBS</TableCell>
                    </TableRow>
                </ TableHead>
                <TableBody>
                    {players.map((player, index) => (
                       <PlayerItem key={player.id} player={player} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PlayerList;
