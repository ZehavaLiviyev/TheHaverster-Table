import React, { useState, useEffect } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, makeStyles, Card }
    from '@material-ui/core';
    import '../css/App.css';

import Pagination from '@material-ui/lab/Pagination';
import DataOfTable from './DataOfTable';
import Title from './Title';
import Button from "mui-button"

const NUMBER_PER_PAGE = 10;

const useStyles = makeStyles({
    card: {
        backgroundColor: 'whitesmoke'
    }
});

function MyTable() {

    const classes = useStyles();
    const [sortBy, setsortBy] = useState('asset');
    const [currentPage, setCurrentPage] = useState(1);



    function clickedA() {
        setsortBy('asset');
    }

    function clickedI() {
        setsortBy('ip');
    }

    return (
        <React.Fragment >
            <br />
            <Title></Title>
            <br />
            <Card className={classes.card} elevation={24} style={{ width: '60rem' }}>

                <TableContainer>

                    <Table style={{ border: "1px solid black" }} sx={{ minWidth: 650 }}>

                        <TableHead>
                            <TableRow>
                                <TableCell style={{ border: "1px solid black" }} align='left'>
                                    <Button onClick={clickedA} variant="text">Asset</Button>
                                </TableCell>
                                <TableCell style={{ border: "1px solid black" }} align='center'>
                                    <Button size='large' onClick={clickedI} variant="text">IP Adress</Button>
                                </TableCell>

                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <DataOfTable currentPage={currentPage} sortBy={sortBy}></DataOfTable>
                        </TableBody>

                    </Table>
                </TableContainer>


                <Pagination
                    size="small"
                    page={currentPage}
                    count={Math.ceil(26 / NUMBER_PER_PAGE)}
                    onChange={(event, page) => setCurrentPage(page)}
                    variant="outlined"
                    shape="rounded"
                    style={{
                        border: "1px solid black",
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        paddingTop: 10,
                    }}
                />

            </Card >
            <br />
            <h3 className="title" style={{color:'#e55959'}}> by Zehava Liviyev</h3>
        </React.Fragment>
    )
}
export default MyTable;