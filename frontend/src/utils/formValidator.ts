/** @format */

import * as yup from 'yup';

export const LoginFormSchema = yup.object().shape({
    identifier: yup
        .string()
        .required('Please, provide the email or username'),
    password: yup
        .string()
        .min(6, 'Password at least 6 characters')
        .required('password is required'),
});

export const RegisterSchema = yup
    .object()
    .shape({
        username: yup.string().required('Please provide username'),
        // dateOfBirth: yup.date().required('Please provide your date of birth'),
        email: yup
            .string()
            .email('Wrong email')
            .required('Please, provide the email'),
        password: yup
            .string()
            .min(6, 'Password at least 6 characters')
            .required('password is required')
    })

export const betSchema = (balance:number) => ({
    CreateBetSchema: yup.object().shape({
        sum: yup.number().min(0).max(balance, 'Entered sum is more than you have').required('Please, provide the sum'),
        team: yup.number().required('Please provide team')
    })
})

export const addBalanceSchema = yup.object().shape({
    sum: yup.number().min(0).required('Please, provide the sum')
})


// export const ChangeUserDataSchema = yup.object().shape({
//     fullName: yup.string().required('Please provide name'),
//     oldPassword: yup.string().required('Please provide old password'),
//     password: yup.string()
//         .min(6, 'Password at least 6 characters')
//         .required('Please provide new password')
// })