import React from 'react';
import TextField from "@mui/material/TextField";
import {ITeam} from "@/utils/types/teams";
import {useFormContext} from "react-hook-form";

interface OptionFieldProps {
    name: string;
    label: string;

    options: ITeam[];
}

const OptionField: React.FC<OptionFieldProps> = ({name, label, options}) => {
    const { register, formState } = useFormContext();

    return (
        <TextField
            {...register(name)}
            id="outlined-select-currency"
            select
            name={name}
            label={label}
            SelectProps={{
                native: true,
            }}
            error={!!formState.errors[name]?.message}
            helperText={`Please select ${name}`}
        >
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.attributes.name}
                </option>
            ))}
        </TextField>
    );
};

export default OptionField;
