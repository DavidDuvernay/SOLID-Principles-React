import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoList from './SingleResponsabilityPrinciple';
import { TitleWithButton } from './OpenClosedPrinciple';
import { Button, RedButton } from './LiskovSustitutionPrinciple';
import Todo from './DependencyInversionPrinciple';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TodoList /> */}
    {/* <TitleWithButton title="Hello World!" buttonText="Button Text" onClick={() => {}}/> */}
    {/* <Button  title="Hello Button" color="green" size="xl"/>
    <RedButton title="Hello RedButton" size="m"/> */}
    <Todo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
