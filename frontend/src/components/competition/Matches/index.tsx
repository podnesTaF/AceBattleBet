import {useRouter} from "next/router";
import React from "react";
import styles from './Matches.module.css'
import {Card, Container} from "@mui/material";

const Matches = () => {
    const router = useRouter()

    return (
        <Container className={styles.container}>
            <h1>Matches</h1>
            <Container sx={{margin: 'auto'}}>
                <Card onClick={() => router.push('/matches/1')} className={styles.items}>
                        <div className={styles.item}>
                            <h2 className={styles.itemTitle}>Brussels</h2>
                            <h3>Coach: John Snow</h3>
                            <h3>Players:</h3>
                            <ul>
                                <li>Oleksii Pidnebesnyi</li>
                                <li>Stas Drapko (j)</li>
                                <li>Jokob Ing</li>
                                <li>John Doe</li>
                            </ul>
                        </div>
                    <h1>
                        VS
                    </h1>
                        <div className={styles.item}>
                            <h2 className={styles.itemTitle}>Luxembourg</h2>
                            <h3>Coach: John Voloshyn</h3>
                            <h3>Players: </h3>
                            <ul>
                                <li>Oleksii Pidnebesnyi</li>
                                <li>Stas Drapko (j)</li>
                                <li>Jokob Ing</li>
                                <li>John Doe</li>
                            </ul>
                        </div>
                </Card>
            </Container>
        </Container>
    );
};

export default Matches;
