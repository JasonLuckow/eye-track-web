import React from 'react';
import {ImageList} from "@material-ui/core";

export default function ImageSetter(props){
    const {gap, cols, rowHeight, variant, children} = props;
    return(
        <ImageList
            gap={gap || 4}
            cols={cols || 4}
            rowHeight={rowHeight || 'auto'}
            variant={variant || 'standard'}
        >
            {children}
        </ImageList>
    )
}
