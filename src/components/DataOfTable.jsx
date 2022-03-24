import React, { useState, useEffect } from 'react';
import getData from '../services/getData';
import { TableCell, TableRow, Avatar, makeStyles } from '@material-ui/core';

const NUMBER_PER_PAGE = 10;

const useStyles = makeStyles({
    root: {
        color: 'black',
        fontFamily: 'Luxurious Roman',
        fontSize: 'large'
    }
});


function DataOfTable(props) {
    const classes = useStyles();
    const [data, setData] = useState([]);

    const currentPage = props.currentPage;
    const sortBy = props.sortBy;

    useEffect(getTheData, []);

    function getTheData() {
        getData()
            .then(
                (u) => {
                    setData(u);
                }
            );
    }


    return (
        <React.Fragment>

            {data
                .sort((x, y) => {
                    if (sortBy == 'ip') {

                        var a = x.substring(x.indexOf(":") + 1);
                        var b = y.substring(y.indexOf(":") + 1);

                        a = a.split('.');
                        b = b.split('.');
                        for (var i = 0; i < a.length; i++) {
                            if ((a[i] = parseInt(a[i])) < (b[i] = parseInt(b[i])))
                                return -1;
                            else if (a[i] > b[i])
                                return 1;
                        }
                        return 0;
                    }
                    if (sortBy == 'asset') {
                        if (x < y) { return -1; }
                        if (x > y) { return 1; }
                    }

                })
                .slice(currentPage * NUMBER_PER_PAGE - NUMBER_PER_PAGE, currentPage * NUMBER_PER_PAGE)
                .map((element, index) =>
                    <TableRow key={index}>
                        <TableCell style={{ borderRight: "1px solid black" }} className={classes.root} align='left'>{element.substring(0, element.indexOf(":"))} </TableCell>
                        <TableCell className={classes.root} align='center'>{element.substring(element.indexOf(":") + 1)} </TableCell>
                    </TableRow>
                )}

        </React.Fragment>

    );

} export default DataOfTable;