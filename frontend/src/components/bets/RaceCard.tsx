import React, {useEffect, useState} from 'react';

interface RaceCardProps {
    date: string,
    name: string,
    biggerRate: number,
    lowerRate: number
}

const RaceCard: React.FC<RaceCardProps> = ({date, biggerRate, lowerRate, name}) => {
    const [values, setValues] = useState<String[]>([])

    useEffect(() => {
        setValues(defineRateCof(biggerRate, lowerRate))
    }, [])
    const defineRateCof = (biggerRate: number, lowerRate: number) => {
        let cof = +(100 / ((biggerRate / lowerRate) * 100)).toFixed(4)
        if(cof > 0.6 && cof <= 0.7) {
            return ['2/3', '1/3']
        } else if (cof >= 0.5 && cof < 0.6) {
            return ['1/2', '1/2']
        } else if (cof > 0.7 && cof <= 0.9) {
            return ['3/4', '1/4']
        } else {
            return ['4/5', '1/5']
        }
    }

    return (
        <div className='flex flex-col p-4 items-center my-8 bg-stone-800/75 rounded'>
            <h3 className='text-xl'>{name}</h3>
            <div>
                <p>Date:</p>
                <div className='bg-white text-black flex justify-center items-center p-4 mb-4'>
                    <p>{date}</p>
                </div>
            </div>
            <div className='w-full'>
                <p>Win:</p>
                <div className='flex'>
                    <div className={`flex justify-center items-center w-${values[0]} bg-yellow-500 py-3 px-4`}>
                        {biggerRate}
                    </div>
                    <div className={`flex justify-center items-center w-${values[1]} bg-red-500 py-3 px-4`}>
                        {lowerRate}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RaceCard;
