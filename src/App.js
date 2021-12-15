import React, { Suspense } from 'react';
import './App.css';

import { Link, Route, Switch } from "wouter";

import Header from 'components/Header';

import SearchResults from 'pages/SearchResults';
import Detail from 'pages/Detail';
import Login from 'pages/Login';
import Register from 'pages/Register';
import NotFound from 'pages/NotFound';

import { UserContextProvider } from 'context/UserContext';
import { GifsContextProvider } from 'context/GifsContext';


const HomePage = React.lazy(() => import('pages/Home'));


function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
          <Header />
            <Link to='/'>
              <figure className="App-logo">
                <img src="https://i.postimg.cc/Kj523yfG/Giffy-Logo-no-BG.png" alt="Giffy Logo" />
              </figure>
            </Link>

            <GifsContextProvider>
              <Switch>
                <Route component={HomePage} path="/" />
                <Route component={SearchResults} path="/search/:keyword/:rating?/:language?" />
                <Route component={Detail} path="/gif/:id" />
                <Route component={Login} path="/login" />
                <Route component={Register} path="/register" />
                <Route component={NotFound} />
              </Switch>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}


export default App;