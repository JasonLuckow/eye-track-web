import React from 'react'
import InitForm from './InitForm';
import PageHeader from "../../components/PageHeader"
import {Paper, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),

    },
    title: {
        textAlign: "center"
    },
    pageHeader: {
        padding: theme.spacing(5),
        display: 'flex',
        marginBottom: theme.spacing(0),
        textAlign:'center'
    },
}))

export default function FormHead() {

    const classes = useStyles();

    return (
        <>

            <Paper className={classes.pageContent}>
                    <Typography
                    variant="h3"
                    component="div"
                    style ={{
                        textAlign:'center',
                        paddingBottom: '10px'
                    }}
                >Assessment Form</Typography>
                    {/*<PageHeader className={classes.title}
                            title="Assessment Form" align="center"
                />*/}
                <InitForm/>
            </Paper>
        </>
    )
}