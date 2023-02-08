import React from 'react';
import {IPlayer} from "@/models/players";
import styles from './PlayerItem.module.css'
import {getMin} from "@/utils/time";
import {Collapse, IconButton, Table, TableBody, TableCell, TableHead, TablePagination, TableRow} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface PlayerItemProps {
    player: IPlayer
}

const PlayerItem: React.FC<PlayerItemProps> = ({player}) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} className={styles.info} onClick={() => setOpen(!open)}>
                <TableCell>{player.id - 6}</TableCell>
                <TableCell>{player.attributes.name}</TableCell>
                <TableCell>{player.attributes.surname}</TableCell>
                <TableCell>{player.attributes.team.data.attributes.name}</TableCell>
                <TableCell>{player.attributes.nationality}</TableCell>
                <TableCell>{player.attributes.dateOfBirth}</TableCell>
                <TableCell>{player.attributes.team.data.attributes.coach.data.attributes.name} {player.attributes.team.data.attributes.coach.data.attributes.surname}</TableCell>
                <TableCell className={styles.details}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow className={styles.extendedInfo}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <div className={styles.headerWrap}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Player's Personal Bests:
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div">
                                    Category: {player.attributes.age_group}
                                </Typography>
                            </div>
                            <Table size="small" aria-label="personal-records">
                                <TableHead>
                                    <TableRow>
                                        {player.attributes.pbs.map((pb, index) => (
                                            <TableCell key={index}>{pb.distance}m</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        {player.attributes.pbs.map((pb, index) => (
                                            <TableCell align={'left'} key={index}>{getMin(pb.time)}.00</TableCell>
                                        ))}
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

export default PlayerItem;
