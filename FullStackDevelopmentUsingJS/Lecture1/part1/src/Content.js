import React from 'react';
import {Part} from './Part';

export const Content=()=>
{
    const partsArray=[
        {
            part:'Fundamentals of React',
            exerices:10,
        },
        {
            part:'Using props to pass data',
            exerices:7,

        },
        {
         
        part:'State of the component',
        exerices:14,
        }

    ]
   
   
    return(
        <div>
               {
                   partsArray.map(element=>{
                    return <Part part={element.part} exerices={element.exerices}/>
                   })
                    

               }          
    
        </div>
    )
}