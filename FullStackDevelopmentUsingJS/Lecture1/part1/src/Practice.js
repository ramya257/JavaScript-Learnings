import React from 'react';


export const Practice=()=>{
    const course='Half Stack Application Development'
    const part1='Fundamentals of React'
    const exerices1=10
    const part2='Using props to pass data'
    const exerices2=7
    const part3='State of the component'
    const exerices3=14

    return(
        <div>
<h1> {course}</h1>
        <p>{part1} and {exerices1}</p>
<p> { part2} and {exerices2} </p>
<p> {part3} and {exerices3}</p>
<p> Number of exercises equals {exerices1+exerices2+exerices3}</p>
        </div>
        
    )
}