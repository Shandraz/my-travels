import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travel
          destination="Cancun"
          country="Mexico"
          photo="https://media-cdn.tripadvisor.com/media/photo-s/11/c7/d1/39/club-med-cancun-yucatan.jpg"
          distance="8254km"
        />
        <Travel
          destination="Beijing Jiaotong University"
          country="China"
          photo="https://d1gns46gm3ntni.cloudfront.net/institutes/institute9637/bjtu.jpg"
          distance="8400km"
        />

      </div>
    );
  }
}

export default App;
