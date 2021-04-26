import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/CusotmerPages/Home";
import Login from "./components/Login";
import ListCustomers from "./components/CusotmerPages/ListCustomers";
import './App.css'
import CreateCustomers from "./components/CusotmerPages/CreateCustomers"
import UpdateCustomers from "./components/CusotmerPages/UpdateCustomers";
import ViewCustomers from "./components/CusotmerPages/ViewCustomers";
import ListAutomobiles from "./components/AutomobilePages/ListAutomobiles";
import CreateAutomobiles from "./components/AutomobilePages/CreateAutomobiles";
import UpdateAutomobiles from "./components/AutomobilePages/UpdateAutomobiles";
import ViewAutomobiles from "./components/AutomobilePages/ViewAutomobiles";
import ListInspections from "./components/InspectionPages/ListInspections";
import CreateInspections from "./components/InspectionPages/CreateInspections";
import UpdateInspections from "./components/InspectionPages/UpdateInspections";

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
                <Route path='/update-customer/:id' exact component={UpdateCustomers} />
                <Route path='/view-customer/:id' exact component={ViewCustomers} />
                <Route path='/automobiles' exact component={ListAutomobiles} />
                <Route path='/add-automobile/:id' exact component={CreateAutomobiles} />
                <Route path='/update-automobile/:id' exact component={UpdateAutomobiles} />
                <Route path='/view-automobile/:id' exact component={ViewAutomobiles} />
                <Route path='/inspections' exact component={ListInspections}/>
                <Route path='/add-inspection/:id' exact component={CreateInspections} />
                <Route path='/update-inspection/:id' exact component={UpdateInspections} />
            </Switch>

        </Router>

    </>


  );
}

export default App;
