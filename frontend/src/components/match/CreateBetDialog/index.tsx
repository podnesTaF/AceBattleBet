import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {FormField} from "@/components/form/FormField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {ITeam} from "@/utils/types/teams";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {betSchema} from "@/utils/formValidator";
import OptionField from "@/components/form/OptionField";
import {Api} from "@/api";
import {useAppDispatch, useAppSelector} from "@/hooks/useAppHooks";
import {changeBalance, selectUserData} from "@/store/slices/userSlice";
import {BetType} from "@/utils/types/bet";

import styles from './CreateBetDialog.module.css'
import {Alert, AlertTitle} from "@mui/material";
import {useState} from "react";
import {addBet, selectTeams, setCoefficients, setSum, setWidth} from "@/store/slices/betSlice";
import {getSumAmount, getWinCofs, useBetsPercentage} from "@/utils/betsAlgoth";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface CreateBetDialogProps {
    teamOne: ITeam;
    teamTwo: ITeam;
    open: boolean;
    setOpen: Function;
    matchId: number
}

const CreateBetDialog: React.FC<CreateBetDialogProps> = ({teamOne, teamTwo, open, setOpen, matchId}) => {
    const [isVisible, setIsVisible] = useState(false)

    const teams = useAppSelector(selectTeams)

    const userData = useAppSelector(selectUserData)
    const dispatch = useAppDispatch();

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(betSchema(userData!.balance).CreateBetSchema),
    });

    const onSubmit = async (dto: any) => {
        const data = {
            sum: dto.sum,
            match: +matchId,
            team: +dto.team,
            user: userData!.id,
            type: BetType.win
        }
        try {
            const bet = await Api().bets.create(data)
            const updatedUserData = await Api().user.updateMyBalance(userData!.id, userData!.balance - data.sum)
            dispatch(changeBalance(updatedUserData.balance))
            console.log([+dto.team, dto.sum])
            dispatch(addBet([+dto.team, dto.sum]))
            console.log(teams)
        } catch (e) {
            console.log(e)
        }

        handleClose()
        setIsVisible(true)

        setTimeout(() => {
            setIsVisible(false)
        }, 2000)

        // clearTimeout(timer)
    }

    const handleClose = () => {
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
                                <FormField name={'sum'} label={'Bet Sum'} type={'number'}/>
                            </Grid>
                            <Grid className={styles.item} item xs={12}>
                                <OptionField name={'team'} label={'Select Team'} options={[teamOne, teamTwo]} />
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


export default CreateBetDialog