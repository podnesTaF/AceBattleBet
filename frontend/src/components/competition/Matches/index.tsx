import {useRouter} from "next/router";
import React, {useEffect} from "react";
import styles from './Matches.module.css'
import {Card, Container} from "@mui/material";
import {IMatch} from "@/utils/types/match";
import MatchCard from "@/components/competition/MatchCard";

interface MatchesProps {
    matches: IMatch[]
}

const Matches: React.FC<MatchesProps> = ({matches}) => {

    useEffect(() => {
        console.log('matches render')
    }, []);


    return (
        <Container className={styles.container}>
            <h1>Matches</h1>
            <Container sx={{margin: 'auto'}}>
                {matches.map((match: IMatch) => (
                    <MatchCard key={match.id} match={match} />
                ))}
            </Container>
        </Container>
    );
};

export default Matches;
