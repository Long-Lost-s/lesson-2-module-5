import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import YourName from './components/YourName';
import { ProductList } from './components/ProductList';
import { ListOfFruit } from './components/ListOfFruit';
import { Time } from './components/Time';
import { BrowserDetail } from './components/BrowserDetails';
import { StudentInfo } from './components/StudenInfo';
import { ProfileCard } from './components/ProfileCard';
import { SignIn } from './components/SignIn';



const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <SignIn></SignIn>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
