import React from 'react';
import './App.css';

// Router con Wounter
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
      name: ` Esto se mostrara cuando se consuma el context desde
        un componente que tenga acceso a este.
      `,
      dev: true
    }}>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <img style={{backgroundColor: "red"}} src="https://i.imgur.com/tqWcsZ8.png" alt="Giffy Logo" className="App-logo" />
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