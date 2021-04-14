import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/Login";
import ListCustomers from "./components/pages/ListCustomers";
import './App.css'
import CreateCustomers from "./components/pages/CreateCustomers"
import UpdateCustomers from "./components/pages/UpdateCustomers";
import ViewCustomers from "./components/pages/ViewCustomers";

function App() {

  return (
    <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/customers' exact component={ListCustomers}/>
                <Route path='/add-customer' exact component={CreateCustomers}/>
                <Route path='/sign-in' exact component={Login} />
                <Route path="/update-customer/:id" exact component={UpdateCustomers} />
                <Route path="/view-customer/:id" exact component={ViewCustomers} />
            </Switch>

        </Router>

    </>


  );
}

export default App;
