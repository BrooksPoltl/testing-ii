import React, { Component } from 'react';
import logo from './logo.svg';

import Display from './components/display'
import DashBoard from './components/dashboard'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DashBoard />
        </header>
      </div>
    );
  }
}

export default App;
