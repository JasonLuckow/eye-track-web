import React from 'react'
import {Paper, Typography, makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff',
        textAlign: "center",
        alignItems: 'center',

    },
    pageHeader: {
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom: theme.spacing(2),
        textAlign: "center",
        alignItems: 'center',

    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        color: '#3c44b1'
    },
    pageTitle: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: '0.6'
        }
    }
}))

export default function PageHeader(props) {

    const classes = useStyles();
    const {title, subTitle} = props;
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h3"
                        component="div"
                        align ="center">
                        {title}</Typography>

                </div>
            </div>
        </Paper>
    )
}