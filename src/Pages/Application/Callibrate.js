//Used to callibrate the eyes

//Step one: display face and box for face to go into

//Step two: display screen with circles to click

//Step three: change screen color and repeat
import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { grey } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import AddCircle from '@material-ui/icons/AddCircle';

// watch the video
// https://react.school/material-ui/paper

function GridItem({ classes }) 
{
    return (
      // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
      // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
      // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
    );
}






const useStyles = makeStyles((theme) => 
({
    root: {
      "& > *": {
        margin: theme.spacing(0),
        width: theme.spacing(window.Width),
        height: theme.spacing(window.innerHeight)
      }
    },
    whitePaper: {
      backgroundColor: '#fff'
    },
    greyPaper: {
        backgroundColor: grey[500]
      },
    blackPaper: {
        backgroundColor: '#000'
    }
  }));


export default function Callibrate() 
{

  const classes = useStyles();
  var curr=0;

  function ButtonClicked()
    {  
        if (curr < 6)
        {
            return curr + 1;
        }
        else
        {
            <Button
                    type="submit"
                    size = "large"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled>
                    done
            </Button> 
        }  
    }   
  return (
    <div className={classes.root}>
        <Paper className={classes.blackPaper}> 
            <Grid container>
                <Grid item xs={12} style={{backgroundColor: '#000'}}>
                    
                    <Button
                    type="submit"
                    size = "large"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick = {ButtonClicked()}>
                    press
                    </Button> 
                       
                </Grid>
            </Grid>
        </Paper>
    </div>
  );
}
