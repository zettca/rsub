import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Main from './Main';
import Settings from './Settings';
import './App.css';

class App extends React.Component {
  render() {
    const base = process.env.PUBLIC_URL;
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav>
              <h3>
                <Link to={base + '/'}>Home</Link>
              </h3>
              <h3>
                <Link to={base + '/settings'}>Settings</Link>
              </h3>
            </nav>
          </header>
          <main>
            <Route exact path={base + '/'} component={Main}/>
            <Route path={base + '/settings'} component={Settings}/>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
