import React, {useState} from "react";
import { Typography } from "@material-ui/core";
import {ThemeProvider, createTheme} from "@material-ui/core/styles"

const theme = createTheme({
  typography:{
    fontFamily: [
        'Robot', 'Mono'
    ].join(','),
  },
}); 

export default function CallibrateTypography(props) {
  const {color} = props

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
              <Typography variant = "h2">
                <h1 style={{fontSize: '2rem', color: color || 'black' , position: 'absolute', left: 650, top:0}}>Click Button 5 Times </h1>
                <h1 style={{fontSize: '0.9rem', color: color || 'black', position: 'absolute', left: 650, top:50}}>
                  Make Sure Face Stays in 
                </h1>
                <h1 style={{fontSize: '0.9rem', color: 'green' , position: 'absolute', left: 805, top:50}}>
                  GREEN 
                </h1>
                <h1 style={{fontSize: '0.9rem', color: color || 'black', position: 'absolute', left: 860, top:50}}>
                  box
                </h1>
              </Typography>
            </div>
          </ThemeProvider>
    )
}