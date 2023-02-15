import React, {useEffect} from 'react';
import {IBet} from "@/models/bets";
import {
    differenceStates,
    differenceTypes,
    selectDiffTeams,
    setTeamOneDifferences,
    setTeamTwoDifferences
} from "@/store/slices/differenceSlice";
import {structureDifferenceBets} from "@/utils/diffAlgoth";
import {useAppDispatch, useAppSelector} from "@/hooks/useAppHooks";
import styles from './DifferenceItems.module.css'
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import DifferenceItem from "@/components/match/DifferenceItem";
import CreateDiffDialog from "@/components/match/CreateDiffDialog";
import {selectUserData} from "@/store/slices/userSlice";


interface DifferenceItemsProps {
    id: number;
    bets: IBet[];
    team: 0 | 1;
    matchId: number;
    teams: string[];
}

const DifferenceItems: React.FC<DifferenceItemsProps> = ({bets, id, team, matchId, teams}) => {
    const [structuredBets, setStructuredBets] = React.useState<{id: number, statements: differenceStates[]}>(structureDifferenceBets(bets, id));
    const [open, setOpen] = React.useState(false);
    const [diffType, setDiffType] = React.useState<differenceTypes>();
    const [agree, setAgree] = React.useState(false);
    const userData = useAppSelector(selectUserData)

    const openDialog = (type: differenceTypes, agree: boolean) => {
        setOpen(true);
        setDiffType(type);
        setAgree(agree);
    }

    const dispatch = useAppDispatch();

    const teamDifferences = useAppSelector(selectDiffTeams)

    useEffect(() => {
        if(team === 0) {
            dispatch(setTeamOneDifferences(structuredBets));
        } else if(team === 1) {
            dispatch(setTeamTwoDifferences(structuredBets));
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className={styles.diff}>
            {team === 0 ? (
                <h3>{teams[0]} faster than {teams[1]}</h3>
                ) : (
                <h3>{teams[1]} faster than {teams[0]}</h3>
                    )}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Statement
                        </TableCell>
                        <TableCell>
                            Yes
                        </TableCell>
                        <TableCell>
                            No
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teamDifferences[team].statements?.map((statement, index) => (
                        <DifferenceItem key={index} openDialog={openDialog} team={id} statement={statement} />
                    ))}
                </TableBody>
            </Table>
            {userData && <CreateDiffDialog setOpen={setOpen} open={open} matchId={matchId} diffTeamId={id} diffType={diffType || differenceTypes.less5} agree={agree} />}
        </div>
    );
};

export default DifferenceItems;
