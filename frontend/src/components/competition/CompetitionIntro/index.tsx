import React from "react";
import styles from './CompetitionIntro.module.css'

interface CompetitionIntroProps {
    name: string;
    description: string;
    image: string;
}

const CompetitionIntro: React.FC<CompetitionIntroProps> = ({description,name, image}) => {
    return (
        <div className={styles.competitionPreview} style={{backgroundImage: `url(https://abb-server-production.up.railway.app${image})`}}>
            <div className={styles.item}>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <div className='overlay'></div>
        </div>
    );
};

export default CompetitionIntro;
