import React, {Component} from 'react'
import CustomerService from "../../services/CustomerService";
import '../Button.css'
import axios from "axios";
import './ListCustomers.css'

const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJPbGFmIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlVTRVJfVEVDIn0seyJhdXRob3JpdHkiOiJVU0VSX0JBQyJ9LHsiYXV0aG9yaXR5IjoiVVNFUl9UUkUifSx7ImF1dGhvcml0eSI6IlVTRVJfRlJPIn0seyJhdXRob3JpdHkiOiJBRE1JTiJ9XSwiaWF0IjoxNjIxNDA3Mzg2LCJleHAiOjE2MjI1ODQ4MDB9.4Tu05J_3PfGzYbq2GcJtqInLdJm1DE2cc3EzJ9XE8Q5y3vihN0IiKvhBScuFgK-tip3X_VNGo4ADTnGF3s6tag'
axios.interceptors.request.use(
    config=> {
        config.headers.authorization = `Bearer ${accessToken}`; //use for develop, overall access
        // config.headers.authorization = localStorage.getItem('token'); //real app
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
            customers: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.viewCustomer = this.viewCustomer.bind(this);
        this.addAutomobile = this.addAutomobile.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidMount(){
        console.log(", I just mounted")
        CustomerService.getCustomers().then((res) =>{
            console.log(res)
            this.setState({customers : res.data});
            console.log("I am a new ListCustomers")
        })
    }

    editCustomer(customerId){
        this.props.history.push(`/update-customer/${customerId}`)
        console.log("I am id"+customerId)
    }

    addCustomer(){
        this.props.history.push('/add-customer');
    }

    deleteCustomer(customerId){
        CustomerService.deleteCustomer(customerId).then(res=>{
            this.setState({customers: this.state.customers.filter(customer => customer.customerId !== customerId)})
        })
    }
    viewCustomer(customerId){
        this.props.history.push(`/view-customer/${customerId}`);
    }
    addAutomobile(customerId){
        this.props.history.push(`/add-automobile/${customerId}`);
    }
    sendMessage(customerId){
        this.props.history.push(`/send-message/${customerId}`);
    }

    render(){
        return(
            <div className="main-container">
                <div className="information-container">
                    <h2>Customers List</h2>
                    <div>
                        <button  className='btn--list-customer' onClick={this.addCustomer}>Add Customer</button>
                    </div>
                    <br />
                    <div>
                        <table >
                            <thead>
                            <tr>
                                <th> Customer First Name </th>
                                <th> Customer Last Name </th>
                                <th> Customer Gender </th>
                                <th> Customer Email </th>
                                <th> Actions </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.customers.map(
                                    cus =>{
                                        return(
                                            <tr key={cus.customerId}>
                                                <td>{cus.firstName}</td>
                                                <td>{cus.lastName}</td>
                                                <td>{cus.gender}</td>
                                                <td>{cus.email}</td>
                                                <td>
                                                    <button onClick={()=>{this.editCustomer(cus.customerId)}} className='btn--list-customer'>Update </button>
                                                    <button onClick={()=>{this.deleteCustomer(cus.customerId)}} className='btn--list-customer'>Delete </button>
                                                    <button onClick={()=>{this.viewCustomer(cus.customerId)}} className='btn--list-customer'>View </button>
                                                    <button onClick={()=>{this.addAutomobile(cus.customerId)}} className='btn--list-customer'>Add Auto </button>
                                                    <button onClick={()=>{this.sendMessage(cus.customerId)}} className='btn--list-customer'>Send Message</button>
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
            )


    }


}
export default ListCustomers