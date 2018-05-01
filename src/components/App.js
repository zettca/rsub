import React from 'react';
import Main from './Main';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <span>RuneScape Ultimate Bravery!</span>
        </header>
        <main>
          <Main/>
        </main>
      </div>
    );
  }
}

export default App;
