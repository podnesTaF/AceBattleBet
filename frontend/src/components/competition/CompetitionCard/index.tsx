import React from 'react';
import {useRouter} from "next/router";
import styles from './CompetitionCard.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


interface CompetitionCardProps {
    name: string;
    raceCount: number;
    betsCount: number;
    teams: number;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({betsCount, raceCount, teams, name}) => {
    const router = useRouter()

    return (
        <Card onClick={() => router.push('/competitions/1')} className={styles.card}>
            <CardMedia
                sx={{height: 200}}
                image="/cup-benelux.jpg"
                title="Cub Benelux"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Description for competition
                </Typography>
            </CardContent>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <h3>{raceCount}+</h3>
                    <p>races</p>
                </div>
                <div className={styles.item}>
                    <h3>{betsCount}+</h3>
                    <p>bets</p>
                </div>
                <div className={styles.item}>
                    <h3>{teams}+</h3>
                    <p>teams</p>
                </div>
            </div>
        </Card>
    );
};

export default CompetitionCard;
