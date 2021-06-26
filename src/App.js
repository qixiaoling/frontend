import React, {Component} from 'react';
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
import ViewInspections from "./components/InspectionPages/ViewInspections";
import ListInventories from "./components/InventoryPages/ListInventories";
import CreateInventories from "./components/InventoryPages/CreateInventories";
import UpdateInventories from "./components/InventoryPages/UpdateInventories";
import ViewInventories from "./components/InventoryPages/ViewInventories";
import ListInventoryForInspection from "./components/InspectionInventoryPages/ListInventoryForInspection";
import InventoryLinkedWithInspection from "./components/InspectionInventoryPages/InventoryLinkedWithInspection";
import ListInvoices from "./components/InvoicePages/ListInvoices";
import UpdateInvoices from "./components/InvoicePages/UpdateInvoices";
import ViewInvoice from "./components/InvoicePages/ViewInvoice";
import SendMessage from "./components/CusotmerPages/SendMessage";
import ListUsers from "./components/AdminPages/ListUsers";
import CreateUsers from "./components/AdminPages/CreateUsers";
import UserResetPassword from "./components/UserPage/UserResetPassword";
import AddRoles from "./components/AdminPages/AddRoles";
import Welcome from "./components/Welcome";
import {ConsumerProvider} from "./customerContext";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consumerWithoutCar: []
        }
        this.update = this.update.bind(this);
    }


    update(foundCustomers) {
        this.setState({consumerWithoutCar: foundCustomers})
    }

    render() {
        // const {consumerWithoutCar} = this.state;
        return (
            <>
                <Router>


                    <ConsumerProvider value={{
                        consumerWithoutCar: this.state.consumerWithoutCar,
                        update: this.update,
                    }}>

                        <Navbar/>
                        <Switch>
                            <Route path='/home' exact component={Home}/>
                            <Route path='/customers' exact component={ListCustomers}/>
                            <Route path='/add-customer' exact component={CreateCustomers}/>
                            <Route path='/' exact component={Welcome}/>
                            <Route path='/sign-in' exact component={Login}/>
                            <Route path='/update-customer/:id' exact component={UpdateCustomers}/>
                            <Route path='/view-customer/:id' exact component={ViewCustomers}/>
                            <Route path='/automobiles' exact component={ListAutomobiles}/>
                            <Route path='/add-automobile/:id' exact component={CreateAutomobiles}/>
                            <Route path='/update-automobile/:id' exact component={UpdateAutomobiles}/>
                            <Route path='/view-automobile/:id' exact component={ViewAutomobiles}/>
                            <Route path='/inspections' exact component={ListInspections}/>
                            <Route path='/add-inspection/:id' exact component={CreateInspections}/>
                            <Route path='/update-inspection/:id' exact component={UpdateInspections}/>
                            <Route path='/view-inspection/:id' exact component={ViewInspections}/>
                            <Route path='/inventories' exact component={ListInventories}/>
                            <Route path='/add-inventory' exact component={CreateInventories}/>
                            <Route path='/update-inventory/:id' exact component={UpdateInventories}/>
                            <Route path='/view-inventory/:id' exact component={ViewInventories}/>
                            <Route path='/list-inventory-for-inspection/:id' exact
                                   component={ListInventoryForInspection}/>
                            <Route path='/list-inventory-for-inspection/:idOne/:idTwo' exact
                                   component={InventoryLinkedWithInspection}/>
                            <Route path='/invoices' exact component={ListInvoices}/>
                            <Route path='/update-invoice/:id' exact component={UpdateInvoices}/>
                            <Route path='/view-invoice/:id' exact component={ViewInvoice}/>
                            <Route path='/send-message/:id' exact component={SendMessage}/>
                            <Route path='/admin' exact component={ListUsers}/>
                            <Route path='/admin/add-user' exact component={CreateUsers}/>
                            <Route path='/admin/add-role/:id' exact component={AddRoles}/>
                            <Route path='/password-reset' exact component={UserResetPassword}/>

                        </Switch>
                    </ConsumerProvider>

                </Router>
            </>


        );
    }

}

export default App;
