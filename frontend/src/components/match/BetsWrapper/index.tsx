import React, {useEffect, useState} from 'react';
import styles from './BetsWrapper.module.css'
import BetsItem from "@/components/match/BetsItem";
import {IBet} from "@/utils/types/bet";
import {IMatch} from "@/utils/types/match";
import {getSumAmount, getWinCofs, useBetsPercentage} from "@/utils/betsAlgoth";
import CreateBetDialog from "@/components/match/CreateBetDialog";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "@/hooks/useAppHooks";
import {selectTeams, setCoefficients, setSum, setTeamIds, setWidth} from "@/store/slices/betSlice";
import {ResponseFullMatch} from "@/models/match";
import {getIMatch} from "@/utils/match";
interface BetsWrapperProps {
    data: ResponseFullMatch;
    bets: IBet[];
}

const BetsWrapper: React.FC<BetsWrapperProps> = ({data, bets}) => {
    const dispatch = useAppDispatch();
    const teams = useAppSelector(selectTeams)
    const [open, setOpen] = useState(false)
    const [match, setMatch] = useState<IMatch>(getIMatch(data));

    useEffect(() => {
       setMatch(getIMatch(data));
    }, []);


    useEffect(() => {
        dispatch(setTeamIds([match.team_one.id, match.team_two.id]))
        dispatch(setSum([getSumAmount(match.team_one.id, bets), getSumAmount(match.team_two.id, bets)]))
        dispatch(setCoefficients(getWinCofs(teams[0].sum, teams[1].sum)))
        dispatch(setWidth(useBetsPercentage([teams[0].sum, teams[1].sum])))
    }, [match]);


    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <h2>Win</h2>
                <div onClick={() => setOpen(true)} className={styles.bets_stat}>
                    <BetsItem betCoof={teams[0].coefficient} betSum={teams[0].sum} width={teams[0].width} color={'red'}/>
                    <BetsItem betCoof={teams[1].coefficient} betSum={teams[1].sum} width={teams[1].width} color={'gold'} />
                </div>
            </div>
            <CreateBetDialog matchId={match.id} open={open} setOpen={setOpen} teamOne={match.team_one} teamTwo={match.team_two} />
        </div>
    );
};

export default BetsWrapper;
