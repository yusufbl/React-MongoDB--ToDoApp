import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dailytd from './Dailytd.js';
import Monthlytd from './Monthlytd.js';
import Yearlyytd from './Yearlytd.js';
import "./App.css";

 function App() {

  const [selectedComponent, setSelectedComponent] = useState('');

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };
  
  return (
    <Router>
      <div className='td-app'>
        <nav className='td-text'>To-Do List App</nav>
        <div className='td-body'>
          <div className='td-container'>
              <button className="td-text2" onClick={() => handleButtonClick('A')}>Daily List </button>    
              <button className='td-text2' onClick={() => handleButtonClick('B')}> Monthly List </button>   
              <button className='td-text2' onClick={() => handleButtonClick('c')}>Yearly List </button>  
          </div>
        </div>   
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Dailytd" component={Dailytd} />
        <Route path="/Monthlytd" component={Monthlytd} />
        <Route path="/Yearlytd" component={Yearlyytd} />
      </Switch>
    </Router>
  )
}

export default App;   