import React, { Component } from 'react';
import Header from './components/Header';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.scss';
import Hello from './components/Hello';
import GoodMorning from './components/GoodMorning';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />

          <Route path="/hello" exact component={Hello} />
          <Route path="/morning" component={GoodMorning} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
