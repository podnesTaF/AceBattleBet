import React from 'react';
import {differenceStates} from "@/store/slices/differenceSlice";
import {TableCell, TableRow} from "@mui/material";
import Button from "@mui/material/Button";
import styles from './DifferenceItem.module.css'

interface DifferenceItemProps {
    statement: differenceStates;
    team: number;
    openDialog: Function;
}

const analogies = {
    less5: 'Less than 5',
    less10: 'Less than 10',
    less20: 'Less than 20',
    less30: 'Less than 30',
    more30: 'more than 30'
}

const DifferenceItem: React.FC<DifferenceItemProps> = ({statement, team, openDialog}) => {

    return (
        <TableRow>
            <TableCell>
                {analogies[statement.name]}:
            </TableCell>
            <TableCell>
                <Button onClick={() => {
                    openDialog(statement.name, true)
                }} className={styles.btn} color={"success"} variant={"outlined"}>
                    {statement.agree.coefficient}
                </Button>
            </TableCell>
            <TableCell>
                <Button onClick={() => {
                    openDialog(statement.name, false)
                }} className={styles.btn} color='error' variant={'outlined'}>
                    {statement.disagree.coefficient}
                </Button>
            </TableCell>
        </TableRow>
    );
};

export default DifferenceItem;
