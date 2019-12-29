import React from 'react';
import {Header} from './Header';
import {Content} from './Content';
export const Practice=()=>{
    const course='Half Stack Application Development'


    return(
        <div>
<Header course={course}/>
<Content />

        </div>
        
    )
}