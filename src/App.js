import React, { Suspense } from 'react';
import './App.css';

// Router con Wounter
import { Link, Route, Switch } from "wouter";
// Pages
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
// Contexts
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';
import NotFound from './pages/NotFound'


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
              <figure className="App-logo">
                <img src="https://i.postimg.cc/Kj523yfG/Giffy-Logo-no-BG.png" alt="Giffy Logo" />
              </figure>
            </Link>

            <GifsContextProvider>
              <Switch>
                <Route component={HomePage} path="/" />
                <Route component={SearchResults} path="/search/:keyword" />
                <Route component={Detail} path="/gif/:id" />
                <Route component={NotFound} />
              </Switch>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}


export default App;