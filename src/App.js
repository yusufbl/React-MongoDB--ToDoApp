import React from 'react';
import "./App.css";

 function App() {
  return (
    <div className='td-app'>
        <nav className='td-text'>To-Do List App</nav>
        <div className='td-body'>
          <div className='td-container'>
              <button className="td-text2">Daily List </button>    
              <button className='td-text2'>Monthly List </button>   
              <button className='td-text2'>Yearly List </button>  
          </div>
        </div>   
    </div>
  )
}
export default App;