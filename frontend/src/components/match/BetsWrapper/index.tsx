import React, {useEffect, useRef, useState} from 'react';
import styles from './BetsWrapper.module.css'
import BetsItem from "@/components/match/BetsItem";
import {IBet} from "@/utils/types/bet";
import {IMatch} from "@/utils/types/match";
import {getSumAmount, getWinCofs, getBetsPercentage} from "@/utils/betsAlgoth";
import CreateBetDialog from "@/components/match/CreateBetDialog";
import {useAppDispatch, useAppSelector} from "@/hooks/useAppHooks";
import {addBet, selectTeams, setCoefficients, setSum, setTeamIds, setWidth} from "@/store/slices/betSlice";
import {addBet as addDiffBet} from "@/store/slices/differenceSlice";
import {ResponseFullMatch} from "@/models/match";
import {getIMatch} from "@/utils/match";
import DifferenceItems from "@/components/match/DifferenceItems";
import {selectUserData} from "@/store/slices/userSlice";
import {io} from "socket.io-client";
import {differenceTypes} from "@/store/slices/differenceSlice";
interface BetsWrapperProps {
    data: ResponseFullMatch;
    bets: IBet[];
}

const BetsWrapper: React.FC<BetsWrapperProps> = ({data, bets}) => {
    const dispatch = useAppDispatch();
    const userData = useAppSelector(selectUserData)
    const teams = useAppSelector(selectTeams)
    const [open, setOpen] = useState(false)
    const [match, setMatch] = useState<IMatch>(getIMatch(data));
    const [diffBets, setDiffBets] = useState<IBet[]>(bets.filter(bet => bet.type === 'difference'));
    const socket = useRef<any>()

    useEffect(() => {
       setMatch(getIMatch(data));
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        socket.current = io('ws://localhost:4000')
        socket.current.on('getBets', (data: { team: number, sum: number }) => {
            dispatch(addBet([data.team, data.sum]))
        })
        socket.current.on('getDiffBets', (data: {teamId: number, type: differenceTypes, agree: boolean, sum: number}) => {
            console.log(data)
            dispatch(addDiffBet({...data}))
        })
    }, []);


    useEffect(() => {
        dispatch(setTeamIds([match.team_one.id, match.team_two.id]))
        dispatch(setSum([getSumAmount(match.team_one.id, bets), getSumAmount(match.team_two.id, bets)]))
        dispatch(setCoefficients(getWinCofs(teams[0].sum, teams[1].sum)))
        dispatch(setWidth(getBetsPercentage([teams[0].sum, teams[1].sum])))
    }, [match]);


    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <h2>Win</h2>
                <div onClick={() => setOpen(true)} className={styles.bets_stat}>
                    <BetsItem betCoof={teams[0].coefficient} betSum={teams[0].sum} width={teams[0].width} color={'red'}/>
                    <BetsItem betCoof={teams[1].coefficient} betSum={teams[1].sum} width={teams[1].width} color={'gold'} />
                </div>
                <h2 className={styles.differenceTitle}>Difference</h2>
                <DifferenceItems socket={socket} teams={[match.team_one.attributes.name, match.team_two.attributes.name]} matchId={match.id} team={0} bets={diffBets.filter(bet => bet.team.id === match.team_one.id)} id={match.team_one.id} />
                <DifferenceItems socket={socket} teams={[match.team_one.attributes.name, match.team_two.attributes.name]} matchId={match.id} team={1} id={match.team_two.id} bets={diffBets.filter(bet => bet.team.id === match.team_two.id)} />
            </div>
            {userData && <CreateBetDialog socket={socket} matchId={match.id} open={open} setOpen={setOpen} teamOne={match.team_one} teamTwo={match.team_two} />}
        </div>
    );
};

export default BetsWrapper;
