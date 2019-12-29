import React from 'react'
import { Greeting } from './Greeting';
import {Practice} from './Practice';

//Components are defined as a javascript functions that donot recieve any parameter
//App return the value of the HTML code.
//Passing props to the functional component
export const App=(props)=>{
    return(
        <>
        <h1> Hi {props.name} I am the root component of the React App</h1>
        <Greeting name={props.name}/>
        <Practice/>
        </>

    )
}

