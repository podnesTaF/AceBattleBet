import React from 'react';
import styles from './About.module.css'
import Image from 'next/image';

const About: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.intro}>
                    <Image src='/Group.svg' width={147} height={172} alt='about'/>
                    <div className={styles.titles}>
                        <h2>Team</h2>
                        <h2>Running</h2>
                        <h2>Game</h2>
                    </div>
                </div>
                <div className={styles.text}>
                    <div>
                        <h3>Modern</h3>
                        <h3>Dynamic</h3>
                        <h3>Unpredictable</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
