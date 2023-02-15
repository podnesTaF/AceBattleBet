import React from 'react';
import {IUserBet} from "@/models/bets";
import {TableCell, TableRow} from "@mui/material";
import {BetType} from "@/utils/types/bet";
import {useRouter} from "next/router";

interface BestRowProps {
    matchId: number;
    name: string;
    type: BetType;
    team: string;

    coefficient: number;
    sum: number;
}

const BetsRow: React.FC<BestRowProps> = ({matchId, name,sum,team,type, coefficient}) => {
    const router = useRouter()

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell style={{cursor: 'pointer'}} onClick={() => router.push('/matches/' + matchId)} scope="row">
                {name}
            </TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{team}</TableCell>
            <TableCell>x{coefficient}</TableCell>
            <TableCell>{sum} $</TableCell>
        </TableRow>
    )
};

export default BetsRow;
