import React from "react"
import {Radio} from '@material-ui/core';

export default function ButtonSort(props: any) {

    return (
        <label>
            <Radio
                checked={props.number === props.selected}
                color="primary"
                onClick={() => props.handleClick()}
            />
            {props.sortType}
        </label>
    )
}