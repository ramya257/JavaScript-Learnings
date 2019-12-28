import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

//App is the react component.
//ReactDOM renders the content of React Component into div element defined in index.html with the id:root
ReactDOM.render(<App name="Marie"/>, document.getElementById('root'));


