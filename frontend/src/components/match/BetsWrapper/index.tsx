import React, {useEffect, useState} from 'react';
import styles from './BetsWrapper.module.css'
import BetsItem from "@/components/match/BetsItem";
import {IBet} from "@/utils/types/bet";
import {IMatch} from "@/utils/types/match";
import {getSumAmount, getWinCofs, useBetsPercentage} from "@/utils/betsAlgoth";
import CreateBetDialog from "@/components/match/CreateBetDialog";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/hooks/useAppHooks";
import {selectTeams, setSum} from "@/store/slices/betSlice";
interface BetsWrapperProps {
    match: IMatch;
    bets: IBet[];
}

const BetsWrapper: React.FC<BetsWrapperProps> = ({match, bets}) => {
    const teams = useAppSelector(selectTeams)
    const [open, setOpen] = useState(false)

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
