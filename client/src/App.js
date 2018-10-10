import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import EmployeeList from './Components/EmployeeList'
import EmployeeForm from './Components/EmployeeForm'
import Navbar from './Components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path='/employees' component={EmployeeList} />
            <Route exact path='/employees/form' component={EmployeeForm} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
