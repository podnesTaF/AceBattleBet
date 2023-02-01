import React, {useEffect, useState} from 'react';
import {BetType, IBet} from "@/utils/types/bet";
import styles from './BetsItem.module.css'

interface BetsItemProps {
    betSum: number;
    betCoof: number;
    width?: number;
}

const BetsItem: React.FC<BetsItemProps> = ({ width}) => {

    // useEffect(() => {
    //     setSum((prev: any) => {
    //         return {
    //             ...prev,
    //             [teamId]: betSum
    //         }
    //     })
    //     // console.log(width)
    // },[])


    return (
        <div className={styles.betsItem} style={{width: `${width}%`}}>
            <h3>{0}</h3>
        </div>
    );
};

export default BetsItem;
