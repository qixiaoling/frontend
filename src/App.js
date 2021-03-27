import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Customers from "./components/pages/Customers";
import './App.css'

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/customers' component={Customers}/>
            </Switch>

        </Router>

    </>


  );
}

export default App;
