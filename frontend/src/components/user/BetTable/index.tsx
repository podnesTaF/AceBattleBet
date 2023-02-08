import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import React from 'react';
import {IUserBet} from "@/models/bets";
import BetsRow from "@/components/user/BetsRow";
import styles from './BetTable.module.css';
import PaginationComp from "@/components/shared/PaginationComp";

interface BetTableProps {
    page: number;
    setPage: Function;
    rowsPerPage: number;
    bets: IUserBet[];
    total: number;
}

const BetTable: React.FC<BetTableProps> = ({bets, setPage, page, rowsPerPage, total}) => {

    return (
        <TableContainer className={styles.container} component={Paper}>
            <Table aria-label="a bets table">
                <TableHead>
                    <TableRow>
                        <TableCell>Match</TableCell>
                        <TableCell>Type Of Bet</TableCell>
                        <TableCell>Team</TableCell>
                        <TableCell>Coefficient</TableCell>
                        <TableCell>Bet Sum</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bets && bets.map((bet) => (
                        <BetsRow key={bet.id} coefficient={bet.attributes.coefficient} name={bet.attributes.match.data.attributes.name} type={bet.attributes.type} sum={bet.attributes.sum} team={bet.attributes.team.data.attributes.name} />
                    ))}
                </TableBody>
            </Table>
            <PaginationComp page={page} rowsPerPage={rowsPerPage} setPage={setPage} total={total} />
        </TableContainer>
    );
};

export default BetTable;
