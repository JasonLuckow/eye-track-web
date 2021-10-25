import React from 'react';
import {ImageList} from "@material-ui/core";




export default function ImageSetter(props){
    const {gap, cols, rowHeight, variant, children, height, width} = props;
    return(
        <ImageList
            cols={cols || 4}
            gap={gap || 4}
            rowHeight={rowHeight || 'auto'}
            variant={variant || 'standard'}
        >
            {children}
        </ImageList>
    )
}
// hi