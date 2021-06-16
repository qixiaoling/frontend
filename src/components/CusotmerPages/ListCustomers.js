import React, {Component} from 'react'
import CustomerService from "../../services/CustomerService";
import '../Button.css'
import axios from "axios";
import '../PageCSS/List.css'

// const accessToken ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJPbGFmIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlVTRVJfRlJPIn0seyJhdXRob3JpdHkiOiJVU0VSX0JBQyJ9LHsiYXV0aG9yaXR5IjoiVVNFUl9URUMifSx7ImF1dGhvcml0eSI6IlVTRVJfVFJFIn0seyJhdXRob3JpdHkiOiJBRE1JTiJ9XSwiaWF0IjoxNjIyODA2OTA1LCJleHAiOjE2MjM5NjcyMDB9.zz8982WRAlWF3xfJe6A5wXRVx7iAjC5WNuJsv7QQXPIVjk3AMF3LpHw4kJxcSJMEcTKEA9En7EvDHj3C6toIOw'
axios.interceptors.request.use(
    config => {
        // config.headers.authorization = `Bearer ${accessToken}`; //use for develop, overall access
        config.headers.authorization = localStorage.getItem('token'); //real app
        console.log(config)
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

class ListCustomers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: [],
            searchCustomer: '',
            searchCustomerError: '',
            CustomerWithNoCarFound: [],
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.viewCustomer = this.viewCustomer.bind(this);
        this.addAutomobile = this.addAutomobile.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.handleSearchCustomer = this.handleSearchCustomer.bind(this);
        this.searchCustomer = this.searchCustomer.bind(this);

    }

    componentDidMount() {
        CustomerService.getCustomers().then((res) => {
            console.log(res.data)
            this.setState({customers: res.data});
            const foundCar = this.state.customers.filter((cus) => cus.car === null)
            this.setState({CustomerWithNoCarFound: foundCar});
            console.log(this.state.CustomerWithNoCarFound);
        })
    }

    editCustomer(customerId) {
        this.props.history.push(`/update-customer/${customerId}`)
        console.log("I am id" + customerId)
    }

    addCustomer() {
        this.props.history.push('/add-customer');
    }

    deleteCustomer(customerId) {
        CustomerService.deleteCustomer(customerId).then(res => {
            this.setState({customers: this.state.customers.filter(customer => customer.customerId !== customerId)})
        })
    }

    viewCustomer(customerId) {
        this.props.history.push(`/view-customer/${customerId}`);
    }

    addAutomobile(customerId) {
        this.props.history.push(`/add-automobile/${customerId}`);
    }

    sendMessage(customerId) {
        this.props.history.push(`/send-message/${customerId}`);
    }

    searchCustomer() {
        this.props.history.push(`/view-customer/${this.state.searchCustomer}`)
    }

    handleSearchCustomer(e) {
        e.preventDefault();
        this.setState({searchCustomer: e.target.value})


    }

    render() {
        return (
            <>
            <div className="main-container">
                <div className="information-container">
                    <h2>Customers List</h2>
                    <div>
                        <button className='btn--list-customer' onClick={this.addCustomer}>Add Customer</button>
                    </div>
                    <div className='alert alert-danger'>{this.state.searchCustomerError}</div>
                    <div>
                        <input type='text' placeholder='Search Customer' onChange={this.handleSearchCustomer}/>
                        <button className='btn--list-customer' onClick={this.searchCustomer}>Search</button>

                    </div>

                    {this.state.customers.length > this.state.CustomerWithNoCarFound.length &&
                    <p className='alert alert-danger'>{this.state.CustomerWithNoCarFound.length} customers has not register cars yet!</p>
                    }
                    <br/>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th> Customer ID</th>
                                <th> Customer First Name</th>
                                <th> Customer Last Name</th>
                                <th> Customer Gender</th>
                                <th> Customer Email</th>
                                <th> Registered Car</th>
                                <th> Actions</th>
                            </tr>
                            </thead>
                            <tbody className="list-table">
                            {
                                this.state.customers.map(
                                    cus => {
                                        return (
                                            <tr key={cus.customerId}>
                                                <td>{cus.customerId}</td>
                                                <td>{cus.firstName}</td>
                                                <td>{cus.lastName}</td>
                                                <td>{cus.gender}</td>
                                                <td>{cus.email}</td>
                                                <td> {cus.car? cus.car.numberPlate : 'no car yet'}</td>
                                                <td>
                                                    <button onClick={() => {
                                                        this.editCustomer(cus.customerId)
                                                    }} className='btn--list-customer'>Update
                                                    </button>
                                                    <button onClick={() => {
                                                        this.deleteCustomer(cus.customerId)
                                                    }} className='btn--list-customer'>Delete
                                                    </button>
                                                    <button onClick={() => {
                                                        this.viewCustomer(cus.customerId)
                                                    }} className='btn--list-customer'>View
                                                    </button>
                                                    <button
                                                        disabled={cus.car}
                                                        onClick={() => {
                                                        this.addAutomobile(cus.customerId)
                                                    }} className='btn--list-customer'>Add Auto
                                                    </button>
                                                    <button onClick={() => {
                                                        this.sendMessage(cus.customerId)
                                                    }} className='btn--list-customer'>Send Message
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )

                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
        )


    }


}

export default ListCustomers