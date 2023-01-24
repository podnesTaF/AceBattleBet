import React, {useEffect, useState} from 'react';

interface ButtonProps {
    variant: 'dark' | 'white' | 'gold' | 'red',
    size: 'lg' | 'md' | 'sm',
    children: React.ReactNode
}
const Button: React.FC<ButtonProps> = ({size, variant, children}) => {
    const [bgColor, setBgColor] = useState<String>()

    useEffect(() => {
        if(variant === 'dark') {
            setBgColor('bg-stone-900 text-white hover:bg-black/75')
        } else if (variant === 'white') {
            setBgColor('bg-white text-black hover:bg-white/75')
        } else if (variant === 'gold') {
            setBgColor('bg-yellow-500 text-black hover:bg-yellow-500/75')
        } else {
            setBgColor('bg-red-500 text-white hover:bg-red-500/75')
        }
    }, [])

    return (
        <div className={`flex justify-center items-center ${size === 'sm' ? 'py-1 px-2' : size === 'md' ? 'py-2 px-4' : 'py-3 px-5'} ${bgColor} active:scale-95 rounded cursor-pointer`}>
            {children}
        </div>
    );
};

export default Button;
