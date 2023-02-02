import React from 'react';
import {Card} from "@mui/material";
import {IMatch} from "@/utils/types/match";
import styles from './MatchCard.module.css'
import {useRouter} from "next/router";
import MatchTeam from "@/components/competition/MatchTeam";

interface MatchCardProps {
    match: IMatch
}

const MatchCard: React.FC<MatchCardProps> = ({match}) => {
    const router = useRouter()

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
