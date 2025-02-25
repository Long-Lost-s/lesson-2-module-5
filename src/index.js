import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import { ProductList } from './components/lesson-2/ProductList';
import { IncreDcre } from './components/lesson-3/IncreDecre';
import { ChangeColor } from './components/lesson-3/ChangeColor';
import { App1 } from './components/lesson-3/App1';
import { App2 } from './components/lesson-3/App2';
import { Calculator } from './components/lesson-3/Calculator';
import { StudenInfo } from './components/lesson-3/StudenInfo';
import { ConditionalRendering } from './components/lesson-3/ConditionalRendering';
import { App3 } from './components/lesson-3/App3';
import { ToDoList } from './components/lesson-3/ToDoList';
import { StudentList } from './components/lesson-3/StudentList';
import { Counter } from './components/lesson4/Bai1/Counter';
import { Selector } from './components/lesson4/Bai2/Selector';
import { MyClock } from './components/lesson4/Bai3/MyClock';
import { SelectCar } from './components/lesson4/Bai4/SelectCar';
import { Timer } from './components/lesson4/Bai5/Timer';
import App4 from './components/lesson4/Bai6/App4';



const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <App4></App4>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
