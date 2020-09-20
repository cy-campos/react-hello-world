// import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from "react-dom";

console.log('Hello World console');

const h1 = <h1>Hello World</h1>;
console.log(h1);
ReactDOM.render(h1, document.getElementById('root'));