import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import EmployeeList from './Components/EmployeeList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact to='/' component={EmployeeList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
