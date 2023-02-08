import React from 'react';
import {Pagination} from "@mui/material";
import styles from './PaginationComp.module.css';

interface PaginationCompProps {
    total?: number;
    page: number;
    rowsPerPage: number;
    setPage: Function;
}

const PaginationComp: React.FC<PaginationCompProps> = ({total, page, rowsPerPage, setPage}) => {
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    return (
        <div className={styles.pagination}>
            {total && <Pagination count={Math.ceil(total / rowsPerPage)} page={page} onChange={handleChangePage} shape="rounded" />}
        </div>
    );
};

export default PaginationComp;
