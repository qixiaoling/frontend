import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Customers from "./components/pages/Customers";
import './App.css'

function App() {
    function noneToFlex (){
        document.querySelector(".login-popup").add.classList("show");
    }
    const openLogin = document.querySelector(".sign-up-button");
    if(openLogin){
        openLogin.addEventListener("click",noneToFlex);
    }

  return (
    <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/customers' exact component={Customers}/>
            </Switch>

        </Router>

    </>


  );
}

export default App;
