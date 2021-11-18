import React, {useState} from "react";
import { Typography } from "@material-ui/core";
import {ThemeProvider, createTheme} from "@material-ui/core/styles"

const theme = createTheme({
  typography:{
    fontFamily: [
        'h1'
    ].join(','),
  },
}); 

export default function CallibrateTypography(props) {
  const {color} = props

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
              <Typography variant = "h2">
                <h1 style={{fontSize: '2rem', color: color || 'black' , position: 'absolute', left: 5*window.innerWidth/12, top: window.innerHeight/11}}>Click Button 5 Times </h1>
                <h1 style={{fontSize: '1.25rem', color: color || 'black', position: 'absolute', left: 5*window.innerWidth/12, top: window.innerHeight/6}}>
                  Make Sure Face Stays in the Green Box
                </h1>
              </Typography>
            </div>
          </ThemeProvider>
    )
}