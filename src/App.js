import React, { Suspense } from 'react';
import './App.css';

// Router con Wounter
import { Link, Route } from "wouter";
// Pages
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
// Contexts
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';


const HomePage = React.lazy(() => import('./pages/Home'));


function App() {
  return (
    <StaticContext.Provider value={{
      name: ` Esto se mostrara cuando se consuma el context desde
        un componente que tenga acceso a este.
      `,
      dev: true
    }}>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to='/'>
              <img style={{backgroundColor: "red"}} src="https://i.imgur.com/tqWcsZ8.png" alt="Giffy Logo" className="App-logo" />
            </Link>

            <GifsContextProvider>
              <Route
                component={HomePage}
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
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}


export default App;