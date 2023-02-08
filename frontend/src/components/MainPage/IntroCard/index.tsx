import React from 'react';
import styles from './IntroCard.module.css'

interface IntroCardProps {
    color: 'white' | 'black' | '#ee342c'
    content: string;
    position: 'left' | 'right'
}

const IntroCard: React.FC<IntroCardProps> = ({color, content, position}) => {
    return (
        <div className={styles.card} style={{justifyContent: `${position === 'right' ? "end" : 'start'}`, border: '2px solid ' + color}}>
            <h2>{content}</h2>
        </div>
    );
};

export default IntroCard;