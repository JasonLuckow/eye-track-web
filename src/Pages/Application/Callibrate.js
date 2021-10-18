//Used to callibrate the eyes

//Step one: display face and box for face to go into

//Step two: display screen with circles to click

//Step three: change screen color and repeat
import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "../../controls/Button"; 
import { Typography } from "@material-ui/core";
import {ThemeProvider, createTheme} from "@material-ui/core/styles"
import CallibrateButton from "../../controls/CallibrateButton";
import CallibrateTypography from "../../controls/CallibrateTypography";

// watch the video
// https://react.school/material-ui/paper
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,300&display=swap');
</style>

function GridItem({ classes }) 
{
    return (
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
    );
}


const theme = createTheme({
  typography:{
    fontFamily: [
        'Robot', 'Mono'
    ].join(','),
  },
}); 

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
        backgroundColor: '#777'
      },
    blackPaper: {
        backgroundColor: '#000'
    }
  }));


export default function Callibrate() 
{
  
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [fill1, setFill1] = useState(true);

  const ButtonClicked = () => 
  {
    setIndex(index+1);
    setFill1(!fill1);
  }

  return index < 5 ?
  (
    <div className={classes.root}>
        <Paper className={classes.greyPaper}> 
          <CallibrateButton onClick={ButtonClicked}/>
          <CallibrateTypography/>
        </Paper>
    </div>

  ):index < 10 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}> 
          <CallibrateButton width = {30} height = {30} left = {650} top = {100} onClick={ButtonClicked}/>
          <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index < 15 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}>
          <CallibrateButton width = {30} height = {30} left = {900} top = {100} onClick={ButtonClicked}/>
          <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index < 20 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}>
        <CallibrateButton width = {30} height = {30} left = {1300} top = {100} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index < 25 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}>
        <CallibrateButton width = {30} height = {30} left = {100} top = {300} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <= 30 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}> 
        <CallibrateButton width = {30} height = {30} left = {500} top = {300} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <= 35 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}>
        <CallibrateButton width = {30} height = {30} left = {900} top = {300} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <= 40 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}>
        <CallibrateButton width = {30} height = {30} left = {1300} top = {300} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <=45?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}>
        <CallibrateButton width = {30} height = {30} left = {100} top = {500} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <= 50 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}> 
        <CallibrateButton width = {30} height = {30} left = {500} top = {500} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <= 55 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}> 
        <CallibrateButton width = {30} height = {30} left = {900} top = {500} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <= 60 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}> 
        <CallibrateButton width = {30} height = {30} left = {1300} top = {500} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <= 65 ?
  (
    <div className={classes.root}>
        <Paper className={classes.whitePaper}> 
          <CallibrateButton onClick={ButtonClicked}/>
          <CallibrateTypography/>
        </Paper>
    </div>

  ):index <= 70 ?
  (
    <div className={classes.root}>
        <Paper className={classes.whitePaper}>   
          <CallibrateButton width = {30} height = {30} left = {650} top = {100} onClick={ButtonClicked}/>
          <CallibrateTypography/>
        </Paper>
    </div>

  )
  :index <= 75 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
        <CallibrateButton width = {30} height = {30} left = {900} top = {100} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <= 80 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
        <CallibrateButton width = {30} height = {30} left = {1300} top = {100} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <= 85 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
        <CallibrateButton width = {30} height = {30} left = {100} top = {300} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <= 90 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
        <CallibrateButton width = {30} height = {30} left = {500} top = {300} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <= 95 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
        <CallibrateButton width = {30} height = {30} left = {900} top = {300} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <= 100 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
        <CallibrateButton width = {30} height = {30} left = {1300} top = {300} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <=105?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
        <CallibrateButton width = {30} height = {30} left = {100} top = {500} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <= 110 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
        <CallibrateButton width = {30} height = {30} left = {500} top = {500} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <= 115 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
        <CallibrateButton width = {30} height = {30} left = {900} top = {500} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <= 120 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
        <CallibrateButton width = {30} height = {30} left = {1300} top = {500} onClick={ButtonClicked}/>
        <CallibrateTypography/>
      </Paper>
    </div>
  )
  :index <= 125 ?
  (
    <div className={classes.root}>
        <Paper className={classes.blackPaper}> 
          <CallibrateButton onClick={ButtonClicked}/>
          <CallibrateTypography color = 'white'/>
        </Paper>
    </div>

  ):index <= 130 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
        <CallibrateButton width = {30} height = {30} left = {650} top = {100} onClick={ButtonClicked}/>
        <CallibrateTypography color = 'white'/>
      </Paper>
    </div>

  )
  :index <= 135 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
        <CallibrateButton width = {30} height = {30} left = {900} top = {100} onClick={ButtonClicked}/>
        <CallibrateTypography color = 'white'/>
      </Paper>
    </div>
  )
  :index <= 140 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
        <CallibrateButton width = {30} height = {30} left = {1300} top = {100} onClick={ButtonClicked}/>
        <CallibrateTypography color = 'white'/>
      </Paper>
    </div>
  )
  :index <= 145 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
        <CallibrateButton width = {30} height = {30} left = {100} top = {300} onClick={ButtonClicked}/>
        <CallibrateTypography color = 'white'/>
      </Paper>
    </div>
  )
  :index <= 150 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
        <CallibrateButton width = {30} height = {30} left = {500} top = {300} onClick={ButtonClicked}/>
        <CallibrateTypography color = 'white'/>
      </Paper>
    </div>
  )
  :index <= 155 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
        <CallibrateButton width = {30} height = {30} left = {900} top = {300} onClick={ButtonClicked}/>
        <CallibrateTypography color = 'white'/>
      </Paper>
    </div>
  )
  :index <= 160 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
        <CallibrateButton width = {30} height = {30} left = {1300} top = {300} onClick={ButtonClicked}/>
        <CallibrateTypography color = 'white'/>
      </Paper>
    </div>
  )
  :index <=165?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
        <CallibrateButton width = {30} height = {30} left = {100} top = {500} onClick={ButtonClicked}/>
        <CallibrateTypography color = 'white'/>
      </Paper>
    </div>
  )
  :index <= 170 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
        <CallibrateButton width = {30} height = {30} left = {500} top = {500} onClick={ButtonClicked}/>
        <CallibrateTypography color = 'white'/>
      </Paper>
    </div>
  )
  :index <= 175 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
        <CallibrateButton width = {30} height = {30} left = {900} top = {500} onClick={ButtonClicked}/>
        <CallibrateTypography color = 'white'/>
      </Paper>
    </div>
  )
  :index <= 180 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
        <CallibrateButton width = {30} height = {30} left = {1300} top = {500} onClick={ButtonClicked}/>
        <CallibrateTypography color = 'white'/>
      </Paper>
    </div>
  )
  :
  (
    <div className = {classes.root}>
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography variant = "h2">
          <h1 style={{fontSize: '2rem', color: 'black' , position: 'absolute', left: 650, top:0}}> Move Onto Actual Test</h1>
        </Typography>
      </div>
    </ThemeProvider>
    </div>
  )
}
