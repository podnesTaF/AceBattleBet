import React from 'react';

interface IntroCardProps {
    color: 'bg-white' | 'bg-yellow-500' | 'bg-red-500'
    content: string;
    position: 'left' | 'right'
}

const IntroCard: React.FC<IntroCardProps> = ({color, content, position}) => {
    return (
        <div className={`flex items-center ${position === 'right' ? 'justify-end' : ''}  py-10 px-8 ${color} text-black rounded m-3 shadow-md `}>
            <h2 className='text-2xl font-bold'>{content}</h2>
        </div>
    );
};

export default IntroCard;
