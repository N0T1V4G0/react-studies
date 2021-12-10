import React from 'react';
import './App.css';
import StateInAction from './components/StateInAction';
import StateInPractice from './components/StateInPractice';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Sanity Check</h1>
        {/* {<StateInAction />} */}
        {StateInPractice}
      </div>
    );
  }
}

export default App;
