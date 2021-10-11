//Used to callibrate the eyes

//Step one: display face and box for face to go into

//Step two: display screen with circles to click

//Step three: change screen color and repeat
import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
import { grey } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Button from "../../controls/Button"; 
import webgazer from 'webgazer';
import FrontCam from '../../components/FrontCam';

// watch the video
// https://react.school/material-ui/paper

function GridItem({ classes }) 
{
    return (
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
  const [index, setIndex] = useState(0);
  const [fill1, setFill1] = useState(true);
  const xCoor  = [];
  const yCoor = [];

  const ButtonClicked = () => 
  {
    setIndex(index+1);
    count = count +1;
    setFill1(!fill1);
    // var prediction = webgazer.getCurrentPrediction();
    // if (prediction) 
    // {
    //     xCoor[count,1] = prediction.x;
    //     yCoor[count,1]= prediction.y;
    // } 
  }


  const ButtonSelected1 = () => {setFill1(!fill1);}
  var count = 0;

  return index < 5 ?
  (
    <div className={classes.root}>
        <Paper className={classes.greyPaper}> 
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 350, top:100}}/>   
          <div className="Question-text">
            <h1>Click button 5 times</h1>
            
            {index}
            {count}
            {/* {xCoor}
            {yCoor} */}
          </div>
        </Paper>
    </div>

  ):index <= 10 ?
  (
    <div className={classes.root}>
      count = 0;
      <Paper className={classes.greyPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 500, top:100}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 15 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 900, top:100}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 20 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 1300, top:100}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 25 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 100, top:300}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 30 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 500, top:300}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 35 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 900, top:300}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 40 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 1300, top:300}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <=45?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 100, top:500}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 50 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 500, top:500}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 55 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 900, top:500}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 60 ?
  (
    <div className={classes.root}>
      <Paper className={classes.greyPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 1300, top:500}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 65 ?
  (
    <div className={classes.root}>
        <Paper className={classes.whitePaper}> 
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 350, top:100}}/>     
          <div className="Question-text">
            <h1>Click button 5 times</h1>
            {index}
          </div>
        </Paper>
    </div>

  ):index <= 70 ?
  (
    <div className={classes.root}>
        <Paper className={classes.whitePaper}>   
        <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 500, top:100}}/>
        </Paper>
    </div>

  )
  :index <= 75 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 900, top:100}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 80 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 1300, top:100}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 85 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 100, top:300}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 90 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 500, top:300}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 95 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 900, top:300}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 100 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 1300, top:300}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <=105?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 100, top:500}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 110 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 500, top:500}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 115 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 900, top:500}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 120 ?
  (
    <div className={classes.root}>
      <Paper className={classes.whitePaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 1300, top:500}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 125 ?
  (
    <div className={classes.root}>
        <Paper className={classes.blackPaper}> 
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 350, top:100}}/>     
          <div className="Question-text">
            {/* <h1 style={{ color: '0xfff' }}>Click button 5 times</h1> */}
            {index}
          </div>
        </Paper>
    </div>

  ):index <= 130 ?
  (
    <div className={classes.root}>
        <Paper className={classes.blackPaper}>   
        <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 500, top:100}}/>
        </Paper>
    </div>

  ):index <= 135 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 500, top:100}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 140 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 900, top:100}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 145 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 1300, top:100}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 150 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 100, top:300}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 155 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 500, top:300}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 160 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 900, top:300}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 165 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 1300, top:300}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <=170?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 100, top:500}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 175 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 500, top:500}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 180 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 900, top:500}}/>
          </Grid>
      </Paper>
    </div>
  )
  :index <= 185 ?
  (
    <div className={classes.root}>
      <Paper className={classes.blackPaper}> 
          <Grid container>
          <Button variant={fill1 ? "outlined" : "contained"} 
            size="small" 
            text="Shape 2" 
            onClick={ButtonClicked} 
            style={{width: 30, height: 30, position: 'absolute', left: 1300, top:500}}/>
          </Grid>
      </Paper>
    </div>
  )
  :
  (
    <div className={classes.root}>
      <h1>Now Move Onto Actual Test</h1>
    </div>
  )
}
