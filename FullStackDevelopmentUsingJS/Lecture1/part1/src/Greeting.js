import React from 'react'

export class Greeting extends React.Component{

render(){
 //while using props in a class component we should use this.props
    //we have a render method in class components
    return(
        <p> Hi {this.props.name} Greetings for the day!</p>
        
    )
}


}