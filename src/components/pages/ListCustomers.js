import React, {Component} from 'react'
import CustomerService from "../../services/CustomerService";
import '../Button.css'
import axios from "axios";
import './ListCustomers.css'






const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJPbGFmIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlVTRVJfVEVDIn0seyJhdXRob3JpdHkiOiJVU0VSX0JBQyJ9LHsiYXV0aG9yaXR5IjoiVVNFUl9GUk8ifSx7ImF1dGhvcml0eSI6IkFETUlOIn0seyJhdXRob3JpdHkiOiJVU0VSX1RSRSJ9XSwiaWF0IjoxNjE3MTczNzU3LCJleHAiOjE2MTgzNTEyMDB9.hQ5gjmX2OurT09SzCjJeeSI6l08wr-uVYXJ83sc_-yWJG-birFAlO_p-ybIBQZ8OOHIUnw0ZU61rvYUHd4-9MA'
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
        this.editCustomer= this.editCustomer.bind(this);
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
        this.props.history.push(`/update-customers/${customerId}`)
        console.log("I am id"+customerId)
    }

    addCustomer(){
        this.props.history.push('/add-customer');
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
                                                    <button className='btn--list-customer'>Delete </button>
                                                    <button className='btn--list-customer'>View </button>
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