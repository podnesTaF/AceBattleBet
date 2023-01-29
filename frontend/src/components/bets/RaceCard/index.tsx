import React, {useEffect, useState} from 'react';
import styles from './RaceCard.module.css';

interface RaceCardProps {
    date: string,
    name: string,
    biggerRate: number,
    lowerRate: number
}

const RaceCard: React.FC<RaceCardProps> = ({date, biggerRate, lowerRate, name}) => {
    const [values, setValues] = useState<Number[]>([])

    useEffect(() => {
        setValues(defineRateCof(biggerRate, lowerRate))
    }, [])
    const defineRateCof = (biggerRate: number, lowerRate: number) => {
        let cof = +(100 / ((biggerRate / lowerRate) * 100)).toFixed(2)
       return [cof * 100, 100 - cof * 100]
    }

    return (
        <div className={styles.raceCard}>
            <h3 className='text-xl'>{name}</h3>
            <div>
                <p>Date:</p>
                <div className={styles.date}>
                    <p>{date}</p>
                </div>
            </div>
            <div className={styles.rate}>
                <p>Win:</p>
                <div className={styles.rateItem}>
                    <div className={styles.part} style={{width: `${values[0]}%`, backgroundColor: 'red'}}>
                        {biggerRate}
                    </div>
                    <div className={styles.part} style={{width: `${values[1]}%`}}>
                        {lowerRate}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RaceCard;