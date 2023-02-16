import React, {useEffect} from 'react';
import styles from './BetsItem.module.css'

interface BetsItemProps {
    betSum: number;
    betCoof: number;
    width?: number;
    color?: "gold" | 'red'
}

const BetsItem: React.FC<BetsItemProps> = ({ width, betSum, betCoof, color}) => {

    return (
        <div className={styles.betsItem} style={{width: `${width}%`, backgroundColor: color}}>
            <h3>{betCoof.toFixed(2)}</h3>
        </div>
    );
};

export default BetsItem;
