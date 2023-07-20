import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css";
import Dailytd from './Dailytd.js';
import Monthlytd from './Monthlytd.js';
import Yearlytd from './Yearlytd.js';

function App() {
  return (
    <Router>
      <div className='td-app'>
        <nav className='td-text'>To-Do List App</nav>
        <div className='td-body'>
          <div className='td-container'>
            <Link to="/daily" className="td-text2">Daily List</Link>
            <Link to="/monthly" className='td-text2'>Monthly List</Link>
            <Link to="/yearly" className='td-text2'>Yearly List</Link>
          </div>
          <Route path="/daily" component={Dailytd} />
          <Route path="/monthly" component={Monthlytd} />
          <Route path="/yearly" component={Yearlytd} />
        </div>
      </div>
    </Router>
  )
}

export default App;
