import {useRouter} from "next/router";
import React, {useEffect} from "react";
import styles from './Matches.module.css'
import {Card, Container, Pagination} from "@mui/material";
import {IMatch} from "@/utils/types/match";
import MatchCard from "@/components/competition/MatchCard";
import {useFetchMatchesByCompetitionQuery} from "@/services/MatchService";
import {ResponseMatch} from "@/models/match";
import PaginationComp from "@/components/shared/PaginationComp";


const Matches: React.FC = () => {
    const router = useRouter()
    const [page, setPage] = React.useState<number>(1);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(2);
    const id = router?.query?.id
    if(!id) return <p>Null</p>
    const {data, error, isLoading} = useFetchMatchesByCompetitionQuery([+id, page, rowsPerPage])

    return (
        <Container className={styles.container}>
            <h1>Matches</h1>
            <Container sx={{margin: 'auto'}}>
                {isLoading && <p>Loading...</p>}
                {data && data.data.map((match: ResponseMatch) => (
                    <MatchCard key={match.id} match={match} />
                ))}
                <PaginationComp page={page} rowsPerPage={rowsPerPage} setPage={setPage} total={data?.meta.pagination.total} />
            </Container>
        </Container>
    );
};

export default Matches;
