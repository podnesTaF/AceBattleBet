import {useRouter} from "next/router";
import React from "react";
import styles from './Matches.module.css'
import {Card, Container} from "@mui/material";
import {IMatch} from "@/utils/types/match";
import MatchCard from "@/components/competition/MatchCard";

interface MatchesProps {
    matches: IMatch[]
}

const Matches: React.FC<MatchesProps> = ({matches}) => {

    return (
        <Container className={styles.container}>
            <h1>Matches</h1>
            <Container sx={{margin: 'auto'}}>
                {matches.map((match: IMatch) => (
                    <MatchCard match={match} />
                ))}
            </Container>
        </Container>
    );
};

export default Matches;
