import React from 'react';
import './App.css';
import { Link, Route } from "wouter";
// Pages
import Home from './pages/Home/index';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
// Contexts
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';


function App() {
  return (
    <StaticContext.Provider value={{
      name: 'Eudes Serpa',
      dev: true
    }}>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <img src="https://i.imgur.com/caMIGvm.png" alt="Giffy Logo" className="App-logo" />
          </Link>

          <GifsContextProvider>
            <Route
              component={Home}
              path="/"
              />
            <Route
              component={SearchResults}
              path="/search/:keyword"
              />
            <Route
              component={Detail}
              path="/gif/:id"
              />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}


export default App;