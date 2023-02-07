
import { TextField } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormFieldProps {
    name: string;
    label: string;
    type: string;
    margin?: 'none' | 'dense' | 'normal';

    setSum?: Function;
}

export const FormField: React.FC<FormFieldProps> = ({ name, label, type, margin, setSum}) => {
    const { register, formState } = useFormContext();

    return (
        <TextField
            {...register(name)}
            onChange={(e) => setSum && setSum(e.target.value)}
            margin={margin}
            name={name}
            className="mb-20"
            size="small"
            label={type !== 'date' ? label : ""}
            type={type}
            error={!!formState.errors[name]?.message}
            fullWidth
            autoFocus
        />
    );
};