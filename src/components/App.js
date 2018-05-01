import React from 'react';
import Main from './Main';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>Hello!</nav>
        </header>
        <main>
          <Main/>
        </main>
      </div>
    );
  }
}

export default App;
