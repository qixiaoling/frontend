import React, {Component} from 'react'
import CustomerService from "../../services/CustomerService";
import '../Button.css'
import axios from "axios";
const accessToken =
    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJPbGFmIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlVTRVJfVEVDIn0seyJhdXRob3JpdHkiOiJVU0VSX0JBQyJ9LHsiYXV0aG9yaXR5IjoiVVNFUl9GUk8ifSx7ImF1dGhvcml0eSI6IkFETUlOIn0seyJhdXRob3JpdHkiOiJVU0VSX1RSRSJ9XSwiaWF0IjoxNjE3MTczNzU3LCJleHAiOjE2MTgzNTEyMDB9.hQ5gjmX2OurT09SzCjJeeSI6l08wr-uVYXJ83sc_-yWJG-birFAlO_p-ybIBQZ8OOHIUnw0ZU61rvYUHd4-9MA'
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
    constructor() {
        super()
        this.state = {
            customers: []
        }
        this.addCustomer = this.addCustomer.bind(this);
    }




    componentDidMount(){
        console.log("hallo")
        CustomerService.getCustomers().then((res) =>{
            this.setState({customers : res.data});
            console.log("I am ListCustomers")
        })
    }

    addCustomer(){
        this.props.history.push('/add-customer');
    }

    render(){
        return(
            <div>
                <button className="btn btn--primary" onClick={this.addCustomer}>Add Customer</button>
            </div>
            )


    }


}
export default ListCustomers