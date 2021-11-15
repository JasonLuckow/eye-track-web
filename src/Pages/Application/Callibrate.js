
//Step one: display face and box for face to go into

//Step two: display screen with circles to click

//Step three: change screen color and repeat
import React, {useState, Suspense} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import {ThemeProvider, createTheme} from "@material-ui/core/styles"
import CallibrateButton from "../../controls/CallibrateButton";
import CallibrateTypography from "../../controls/CallibrateTypography";
import Grid from "@material-ui/core/Grid";
import { Button as MuiButton} from "@material-ui/core";
import FrontCam from '../../components/FrontCam';
import Popup from "../../components/Popup";
import RecommendedSetup from "../../Other/RecommendedSetup";
import StepsToFollow from "../../Other/StepsToFollow";
import {useHistory} from "react-router-dom";

// watch the video
// https://react.school/material-ui/paper


// function GridItem({ classes })
// {
//     return (
//       <Grid item xs={12} sm={6} md={3}>
//         <Paper className={classes.paper}>item</Paper>
//       </Grid>
//     );
// }


const theme = createTheme({
  typography:{
    fontFamily: [
        'Robot', 'Mono'
    ].join(','),
  },
});



export default function Callibrate() 
{

    const history = useHistory();
    function handlePush() {
        setTimeout(() => history.push('/test-page'), 2000);
    }
  const useStyles = makeStyles((theme) => 
({
    root: {
      "& > *": {
        margin: theme.spacing(0),
        width: "95%",
        height: "95%"
      }
    },
    whitePaper: {
      backgroundColor: '#fff'
    },
    greyPaper: {
        backgroundColor:'#777'
      },
    blackPaper: {
        backgroundColor: '#000'
    }
  }));
  
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [fill1, setFill1] = useState(true);

  const ButtonClicked = () => 
  {
    setIndex(index+1);
    setFill1(!fill1);
  }

  function handlePush() {
    setTimeout(() => history.push('/test-page'), 2000);
}

  return index < 5 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
        <FrontCam/>
        <Popup
            ButtonText = "Understood"
            title = "Recommendations"
        >
            <RecommendedSetup/>
            <StepsToFollow/>
          </Popup>
            <Paper className={classes.greyPaper}> 
              <CallibrateButton  onClick={ButtonClicked}/>
              <CallibrateTypography/>
            </Paper>
        </div>
      </Grid>
    </Grid>
  ):index < 10 ?
  (
    <Grid container>
    <Grid item xs={12}>
      <div className={classes.root}>
        <Paper className={classes.greyPaper}> 
          <CallibrateButton width = {30} height = {30} left = {4*window.innerWidth/12} top = {window.innerHeight/4} onClick={ButtonClicked}/>
          <CallibrateTypography/>
        </Paper>
      </div>
    </Grid>
    </Grid>
  )
  :index < 15 ?
  (
    
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.greyPaper}>
                <CallibrateButton width = {30} height = {30} left = {7*window.innerWidth/12} top = {window.innerHeight/4} onClick={ButtonClicked}/>
                <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index < 20 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.greyPaper}>
            <CallibrateButton width = {30} height = {30} left = {10*window.innerWidth/12} top = {window.innerHeight/4} onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
    
  )
  :index < 25 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.greyPaper}>
            <CallibrateButton width = {30} height = {30} left = {window.innerWidth/12} top = {window.innerHeight/2} onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 30 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.greyPaper}> 
            <CallibrateButton width = {30} height = {30} left = {4*window.innerWidth/12} top = {window.innerHeight/2}  onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 35 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.greyPaper}>
            <CallibrateButton width = {30} height = {30} left = {7*window.innerWidth/12} top = {window.innerHeight/2} onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 40 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.greyPaper}>
            <CallibrateButton width = {30} height = {30} left = {10*window.innerWidth/12} top = {window.innerHeight/2} onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <=45?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.greyPaper}>
            <CallibrateButton width = {30} height = {30} left = {window.innerWidth/12} top = {3*window.innerHeight/4} onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 50 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.greyPaper}>
            <CallibrateButton width = {30} height = {30} left = {4*window.innerWidth/12} top = {3*window.innerHeight/4}  onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 55 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.greyPaper}>
            <CallibrateButton width = {30} height = {30} left = {7*window.innerWidth/12} top = {3*window.innerHeight/4} onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 60 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.greyPaper}>
            <CallibrateButton width = {30} height = {30} left = {10*window.innerWidth/12} top = {3*window.innerHeight/4} onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 65 ?
  (
    
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
            <Paper className={classes.whitePaper}> 
              <CallibrateButton width = {30} height = {30} left = {window.innerWidth/12} top = {window.innerHeight/4} onClick={ButtonClicked}/>  
              <CallibrateTypography/>
            </Paper>
        </div>
      </Grid>
    </Grid>

  ):index <= 70 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.whitePaper}>   
            <CallibrateButton width = {30} height = {30} left = {4*window.innerWidth/12} top = {window.innerHeight/4} onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 75 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.whitePaper}>   
            <CallibrateButton width = {30} height = {30} left = {7*window.innerWidth/12} top = {window.innerHeight/4}  onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 80 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.whitePaper}>   
            <CallibrateButton width = {30} height = {30} left = {10*window.innerWidth/12} top = {window.innerHeight/4} onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 85 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.whitePaper}>   
            <CallibrateButton width = {30} height = {30} left = {window.innerWidth/12} top = {window.innerHeight/2} onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 90 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.whitePaper}>   
            <CallibrateButton width = {30} height = {30} left = {4*window.innerWidth/12} top = {window.innerHeight/2}  onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 95 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.whitePaper}>   
            <CallibrateButton width = {30} height = {30} left = {7*window.innerWidth/12} top = {window.innerHeight/2} onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 100 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.whitePaper}>   
            <CallibrateButton width = {30} height = {30} left = {10*window.innerWidth/12} top = {window.innerHeight/2} onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <=105?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.whitePaper}>   
            <CallibrateButton width = {30} height = {30} left = {window.innerWidth/12} top = {3*window.innerHeight/4} onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 110 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.whitePaper}>   
            <CallibrateButton width = {30} height = {30} left = {4*window.innerWidth/12} top = {3*window.innerHeight/4}  onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 115 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.whitePaper}>   
            <CallibrateButton width = {30} height = {30} left = {7*window.innerWidth/12} top = {3*window.innerHeight/4} onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 120 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.whitePaper}>   
            <CallibrateButton width = {30} height = {30} left = {10*window.innerWidth/12} top = {3*window.innerHeight/4} onClick={ButtonClicked}/>
            <CallibrateTypography/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 125 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.blackPaper}> 
            <CallibrateButton width = {30} height = {30} left = {window.innerWidth/12} top = {window.innerHeight/4} onClick={ButtonClicked}/> 
            <CallibrateTypography color = 'white'/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  ):index <= 130 ?
  (
    
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.blackPaper}> 
            <CallibrateButton width = {30} height = {30} left = {4*window.innerWidth/12} top = {window.innerHeight/4} onClick={ButtonClicked}/>
            <CallibrateTypography color = 'white'/>
          </Paper>
        </div>
      </Grid>
    </Grid>

  )
  :index <= 135 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.blackPaper}> 
            <CallibrateButton width = {30} height = {30} left = {7*window.innerWidth/12} top = {window.innerHeight/4}  onClick={ButtonClicked}/>
            <CallibrateTypography color = 'white'/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 140 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.blackPaper}> 
            <CallibrateButton width = {30} height = {30} left = {10*window.innerWidth/12} top = {window.innerHeight/4} onClick={ButtonClicked}/>
            <CallibrateTypography color = 'white'/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 145 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.blackPaper}> 
            <CallibrateButton width = {30} height = {30} left = {window.innerWidth/12} top = {window.innerHeight/2} onClick={ButtonClicked}/>
            <CallibrateTypography color = 'white'/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 150 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.blackPaper}> 
            <CallibrateButton width = {30} height = {30} left = {4*window.innerWidth/12} top = {window.innerHeight/2}  onClick={ButtonClicked}/>
            <CallibrateTypography color = 'white'/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 155 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.blackPaper}> 
            <CallibrateButton width = {30} height = {30} left = {7*window.innerWidth/12} top = {window.innerHeight/2} onClick={ButtonClicked}/>
            <CallibrateTypography color = 'white'/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 160 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.blackPaper}> 
            <CallibrateButton width = {30} height = {30} left = {10*window.innerWidth/12} top = {window.innerHeight/2} onClick={ButtonClicked}/>
            <CallibrateTypography color = 'white'/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <=165?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.blackPaper}> 
            <CallibrateButton width = {30} height = {30} left = {window.innerWidth/12} top = {3*window.innerHeight/4} onClick={ButtonClicked}/>
            <CallibrateTypography color = 'white'/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 170 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.blackPaper}> 
            <CallibrateButton width = {30} height = {30} left = {4*window.innerWidth/12} top = {3*window.innerHeight/4}  onClick={ButtonClicked}/>
            <CallibrateTypography color = 'white'/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 175 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.blackPaper}> 
            <CallibrateButton width = {30} height = {30} left = {7*window.innerWidth/12} top = {3*window.innerHeight/4} onClick={ButtonClicked}/>
            <CallibrateTypography color = 'white'/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :index <= 180 ?
  (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper className={classes.blackPaper}> 
            <CallibrateButton width = {30} height = {30} left = {10*window.innerWidth/12} top = {3*window.innerHeight/4} onClick={ButtonClicked}/>
            <CallibrateTypography color = 'white'/>
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
  :
  (
    <Grid container>
      <Grid item xs={12}>
        <div className = {classes.root}>
          <ThemeProvider theme={theme}>
            <div className="App">
            <FrontCam/>
              <MuiButton
                variant={"contained"}
                size={"small"}
                color={"primary"}
                onClick={handlePush}
                style=
                {{width: 300, 
                    height: 50, 
                    position: 'absolute', 
                    left: window.innerWidth/2.5, 
                    top: window.innerHeight/6}}>
                {'Finish'}
                

              </MuiButton>
              <Typography variant = "h2">
                <h1 style={{fontSize: '2rem', color: 'black' , position: 'absolute', left: window.innerWidth/2.5, top: window.innerHeight/10}}> Move Onto Actual Test</h1>
              </Typography>
            </div>
          </ThemeProvider>
        </div>
      </Grid>
    </Grid>
  )
}

