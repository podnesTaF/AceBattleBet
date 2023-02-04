import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {FormField} from "@/components/form/FormField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addBalanceSchema} from "@/utils/formValidator";
import {Api} from "@/api";
import {useAppDispatch, useAppSelector} from "@/hooks/useAppHooks";
import {changeBalance, selectUserData} from "@/store/slices/userSlice";
import styles from './AddBalance.module.css'
import {Alert, AlertTitle} from "@mui/material";
import {useState} from "react";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface AddBalanceProps {
    open: boolean;
    setOpen: Function;
}

const AddBalance: React.FC<AddBalanceProps> = ({open, setOpen}) => {
    const [isVisible, setIsVisible] = useState(false)

    const userData = useAppSelector(selectUserData)
    const dispatch = useAppDispatch();

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(addBalanceSchema),
    });

    const onSubmit = async (dto: any) => {
        try {
            const data = await Api().user.updateMyBalance(userData!.id, userData!.balance + dto.sum)

            dispatch(changeBalance(data.balance))

        } catch (e) {
            console.log(e)
        }

        handleClose()
        setIsVisible(true)

        setTimeout(() => {
            setIsVisible(false)
        }, 2000)
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {isVisible && <div className={styles.alert}>
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    You successfully added money to your balance
                </Alert>
            </div>}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <div className={styles.wrapper}>
                    <DialogTitle className={styles.title}>{"Make your bet"}</DialogTitle>
                    <FormProvider {...form}>
                        <Box component="form" onSubmit={form.handleSubmit(onSubmit)} sx={{mt: 2}}>
                            <Grid className={styles.item} item xs={12}>
                                <FormField name={'sum'} label={'Add sum'} type={'number'}/>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                disabled={!form.formState.isValid || form.formState.isSubmitting}
                                variant="contained"
                                className={styles.btn}
                                sx={{mt: 3, mb: 2}}
                            >
                                Submit
                            </Button>
                        </Box>
                    </FormProvider>
                </div>
            </Dialog>
        </>
    );
}


export default AddBalance;