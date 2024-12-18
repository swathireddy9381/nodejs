import React, { Fragment } from 'react';
import './App.css';
import InputTodo from './components/inputTodo';
import ListTodos from './components/ListTodo';


function App() {
  return (
   <Fragment>
    <div className='container'>
      <InputTodo/>
      <ListTodos/>
    </div>
   </Fragment>
    
  );
}

export default App;
