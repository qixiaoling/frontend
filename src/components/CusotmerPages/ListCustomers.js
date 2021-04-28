import React, {Component} from 'react'
import CustomerService from "../../services/CustomerService";
import '../Button.css'
import axios from "axios";
import './ListCustomers.css'






const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJPbGFmIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlVTRVJfQkFDIn0seyJhdXRob3JpdHkiOiJVU0VSX0ZSTyJ9LHsiYXV0aG9yaXR5IjoiQURNSU4ifSx7ImF1dGhvcml0eSI6IlVTRVJfVFJFIn0seyJhdXRob3JpdHkiOiJVU0VSX1RFQyJ9XSwiaWF0IjoxNjE5NTkyMzg3LCJleHAiOjE2MjA3NzA0MDB9.mbEuNOQ4q8NQ7X0D316N8mea-MsJ90yV_MbNcOLGPjd9z0ur8JJtZ4i93BjyQ6zIsIkox2y9TKKpH1lT0c3eDQ'
const apiUrl = 'http://localhost:8080/customers';
axios.interceptors.request.use(
    config=> {
        config.headers.authorization = `Bearer ${accessToken}`;
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