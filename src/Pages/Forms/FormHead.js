import React from 'react'
import InitForm from './InitForm';
import PageHeader from "../../components/PageHeader"
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    }
}))

export default function FormHead() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                //todo: temp value need to import from api
                title="User"
                subtitle = "InitForm for new test: "
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <InitForm />
            </Paper>
        </>
    )
}