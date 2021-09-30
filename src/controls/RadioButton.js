import React from 'react'
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";

export default function RadioButton(props) {

    const {name, label, value, onChange, items} = props;
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <RadioGroup row
                        name={name}
                        value={value}
                        onChange={onChange}>
                {
                    items.map(
                        (item, index) => (
                            <FormControlLabel value={item.id} control={<Radio/>} label={item.title}/>

                        )
                    )
                }
            </RadioGroup>
        </FormControl>
    )
}