import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import News from './components/News.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx';
import Footer from './components/Footer.jsx';
import PrivateRoute from './components/PrivateRoute.jsx'
import PublicRoute from './components/PublicRoute.jsx';


function App() {
  return (
    <Router >
      <div className="App">
        <Header />
        <div className="container container-wrapper">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <PublicRoute component={Login} path="/login" />
            <PrivateRoute component={Profile} path="/profile" exact />
          </Switch>

        </div>
        < Footer />
      </div>
    </Router>
  );
}

export default App;
