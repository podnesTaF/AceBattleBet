import React, {useEffect} from 'react';
import {Card} from "@mui/material";
import styles from './MatchCard.module.css'
import {useRouter} from "next/router";
import MatchTeam from "@/components/competition/MatchTeam";
import {ResponseMatch} from "@/models/match";

interface MatchCardProps {
    match: ResponseMatch
}

const MatchCard: React.FC<MatchCardProps> = ({match}) => {
    const router = useRouter()
    useEffect(() => {
        console.log('matches card render')
    }, []);

    return (
        <div>
            <Card onClick={() => router.push(`/matches/${match.id}`)} className={styles.items}>
                <MatchTeam match={match} team={"team_one"} />
                <h1>
                    VS
                </h1>
                <MatchTeam match={match} team={"team_two"} />
            </Card>
        </div>
    );
};

export default MatchCard;
