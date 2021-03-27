import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Customers from "./components/pages/Customers";
import Login from './components/Login';
import './App.css'

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/sign-up' exat component={Login} />
                <Route path='/customers' exact component={Customers}/>
            </Switch>

        </Router>

    </>


  );
}

export default App;
