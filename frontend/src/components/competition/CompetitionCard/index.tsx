import React from 'react';
import {useRouter} from "next/router";
import styles from './CompetitionCard.module.css'
import Card from '@mui/material/Card';
import Image from 'next/image'
import {ICompetitionsPageItem} from "@/models/competitions";
import Button from "@mui/material/Button";


interface CompetitionCardProps {
    competition: ICompetitionsPageItem;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({competition}) => {
    const router = useRouter()

    return (
        <Card onClick={() => router.push('/competitions/' + competition.id)} className={styles.card}>
            <Image src={`https://abb-server-production.up.railway.app${competition.image.data.attributes.formats.large.url}`}
                   alt="into image" width={900} height={500} className={styles.media}/>
            <div className={styles.content}>
                <div className={styles.location}>
                    <p>{competition.location}</p>
                    <p>{competition.date.slice(0, 16).replace('T', ' ')}</p>
                </div>
                <div className={styles.title}>
                    <h2>{competition.name}</h2>
                    <p>{competition.description}</p>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <h3>{competition.matches}+</h3>
                    <p>races</p>
                </div>
                <div className={styles.item}>
                    <h3>{competition.betsCount}+</h3>
                    <p>bets</p>
                </div>
                <div className={styles.item}>
                    <h3>{competition.teams}+</h3>
                    <p>teams</p>
                </div>
            </div>
            <Button className={styles.absBtn} variant='contained' color='secondary'>
                See matches
            </Button>
        </Card>
    );
};

export default CompetitionCard;
