import React from 'react';
import {IPlayer} from "@/utils/types/teams";
import styles from './PlayerList.module.css'
import PlayerItem from "@/components/players/PlayerItem";
import {
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@mui/material";
import {useFetchAllPlayersQuery} from "@/services/PlayerService";
import PaginationComp from "@/components/shared/PaginationComp";
interface PlayerListProps {
    // players: IPlayer[]
}

const PlayerList: React.FC<PlayerListProps> = () => {

    const [page, setPage] = React.useState<number>(1);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(8);
    const {data, error, isLoading} = useFetchAllPlayersQuery([page, rowsPerPage])

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
                    {isLoading && <p>Loading...</p>}
                    {data && data.data.map((player) => (
                       <PlayerItem key={player.id} player={player} />
                    ))}
                </TableBody>
            </Table>
            <PaginationComp setPage={setPage} page={page} rowsPerPage={rowsPerPage} total={data?.meta.pagination.total} />
        </TableContainer>
    );
}

export default PlayerList;
