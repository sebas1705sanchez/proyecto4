//import React from "react";
import logo from './imagenes/logo.webp'
import './App.css';
import Task from './componentes/Task.js';

function App() {
  return (
    <div className="task-manager">
      <div className='logo-container'>
        <img
        src={logo}
        className='logo'/>
      </div>
      <div className='main-task-list'>
        <h1>My tasks</h1>
        <Task text="Divide the work"/>
      </div>
    </div>
  );
}

export default App;
