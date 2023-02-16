import React, {useEffect, useState} from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {BetType} from "@/utils/types/bet";
import {betSchema} from "@/utils/formValidator";
import {useAppDispatch, useAppSelector} from "@/hooks/useAppHooks";
import {changeBalance, selectUserData} from "@/store/slices/userSlice";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./CreateDiffDialog.module.css";
import {FormField} from "@/components/form/FormField";
import Button from "@mui/material/Button";
import {Alert, AlertTitle} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import {Transition} from "@/components/match/CreateBetDialog";
import Dialog from "@mui/material/Dialog";
import {differenceTypes, selectDiffTeams} from "@/store/slices/differenceSlice";
import {Api} from "@/api";
import {addBet} from "@/store/slices/differenceSlice";
import {findCoef} from "@/utils/diffAlgoth";
import {getPossibleWin} from "@/utils/betsAlgoth";

interface createDiffDialogProps {
    setOpen: Function;
    open: boolean;
    matchId: number,
    diffTeamId: number;
    diffType: differenceTypes;
    agree: boolean;
}

const CreateDiffDialog: React.FC<createDiffDialogProps> = ({setOpen, open, diffTeamId, diffType, matchId, agree}) => {
    const [sum, setSum] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [possibleWin, setPossibleWin] = useState(0);
    const dispatch = useAppDispatch();

    const differenceTeams = useAppSelector(selectDiffTeams);

    const userData = useAppSelector(selectUserData);

    useEffect(() => {
        setPossibleWin(sum*findCoef(differenceTeams, diffTeamId, diffType, agree))
        // eslint-disable-next-line
    }, [sum])

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(betSchema(userData!.balance).createDiffBetSchema),
    });


    const onSubmit = async (dto: any) => {
        const coef = findCoef(differenceTeams, diffTeamId, diffType, agree)
        const data = {
            sum: +dto.sum,
            match: +matchId,
            team: diffTeamId,
            user: userData!.id,
            type: BetType.difference,
            coefficient: coef,
            possibleWin: coef * +dto.sum,
            differenceType: diffType,
            agree
        }

        try {
            const bet = await Api().bets.create(data)
            const updatedUserData = await Api().user.updateMyBalance(userData!.id, userData!.balance - data.sum)
            dispatch(changeBalance(updatedUserData.balance))
            dispatch(addBet({teamId: diffTeamId, type: diffType, agree, sum: +data.sum}))
        } catch (e) {
            console.log(e)
        }

        handleClose()
        setIsVisible(true)

        setTimeout(() => {
            setIsVisible(false)
        }, 2000)
    };

    const handleClose = () => {
        form.reset()

        setPossibleWin(0)

        setOpen(false);
    };

    return (
        <>
            {isVisible && <div className={styles.alert}>
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    You successfully created a bet — <strong>check it out!</strong>
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
                                <FormField setSum={setSum} name={'sum'} label={'Bet Sum'} type={'number'}/>
                            </Grid>
                            <Grid className={styles.item} item xs={12}>
                                <h3>Possible win: {possibleWin}</h3>
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
};

export default CreateDiffDialog;
