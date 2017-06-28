import React, { Component } from 'react'

function BoilingVerdict(props){
    if(
        ((props.temperature >= 100) && (props.tUnit == 'c'))
        || ((props.temperature >= 212)  && (props.tUnit == 'f'))

        || ((props.temperature >= 273.15)  && (props.tUnit == 'k')))

    {
        return(
            <p>The water would boil at {props.temperature} {props.tUnit}</p>
        )
    }else{
        return(
            <p>The water would NOT boil at {props.temperature} {props.tUnit}</p>
        )
    }
}

export default BoilingVerdict;