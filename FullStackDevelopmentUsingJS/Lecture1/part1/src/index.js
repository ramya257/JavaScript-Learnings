import React from 'react';
import ReactDOM from 'react-dom';



class Greeting extends React.Component{
    //while using props in a class component we should use this.props
    //we have a render method in class components
    render(){
        let name="Marie";
        return <h1>Hi {this.props.name}, I know your age is {this.props.age} and you are a {this.props.gender}</h1>
    }
}

//Components are defined as a javascript functions that donot recieve any parameter
//App return the value of the HTML code.
//Passing props to the functional component 
const App=(props)=>{
    const date=new Date()
    const a=10
    const b=20
    console.log("Rendering App Component")
    return (
        <div>
            <p>Hello World, it is {date.toString()}</p>
            <p>{props.name}</p>
            <p> {a} plus {b} equals {a+b}</p>
        </div>
    )
    //for dynamic rendering-- any JS code inside {} is evaluated
}






//App is the react component.
//ReactDOM renders the content of React Component into div element defined in index.html with the id:root
//ReactDOM.render(<App name="ramya"/>, document.getElementById('root'));
ReactDOM.render(<Greeting name='Marie' age='23' gender='female' />, document.getElementById('root'));

