import React from 'react';
import ReactDOM from 'react-dom';

//Components are defined as a javascript functions that donot recieve any parameter
//App return the value of the HTML code.
const App=()=>{
    const date=new Date()
    const a=10
    const b=20
    console.log("Rendering App Component")
    return (
        <div>
            <p>Hello World, it is {date.toString()}</p>
            <p> {a} plus {b} equals {a+b}</p>
        </div>
    )
    //for dynamic rendering-- any JS code inside {} is evaluated
}






//App is the react component.
//ReactDOM renders the content of React Component into div element defined in index.html with the id:root
ReactDOM.render(<App />, document.getElementById('root'));

