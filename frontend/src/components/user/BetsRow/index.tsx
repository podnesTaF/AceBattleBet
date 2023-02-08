import React from 'react';
import {IUserBet} from "@/models/bets";
import {TableCell, TableRow} from "@mui/material";
import {BetType} from "@/utils/types/bet";

interface BestRowProps {
    name: string;
    type: BetType;
    team: string;

    coefficient: number;
    sum: number;
}

const BetsRow: React.FC<BestRowProps> = ({name,sum,team,type, coefficient}) => {
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell scope="row">
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
