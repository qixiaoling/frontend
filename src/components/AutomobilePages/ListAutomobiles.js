import React, {Component} from 'react'
import AutomobileService from "../../services/AutomobileService";
import'../CusotmerPages/ListCustomers.css'
import axios from "axios";

const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJPbGFmIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IkFETUlOIn0seyJhdXRob3JpdHkiOiJVU0VSX1RSRSJ9LHsiYXV0aG9yaXR5IjoiVVNFUl9GUk8ifSx7ImF1dGhvcml0eSI6IlVTRVJfVEVDIn0seyJhdXRob3JpdHkiOiJVU0VSX0JBQyJ9XSwiaWF0IjoxNjE4MzkxNjIwLCJleHAiOjE2MTk1NjA4MDB9.dtSmT_MCQw8Z2OtVv8f_Yag8b_vsTflMkZdZ3M_NrcgtjtedGJaS77nFWTMcCx5ZvzB1n9AnNpcixOCDOIsYew'
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


class ListAutomobiles extends Component{
    constructor() {
        super()
        this.state={
            automobiles: []
        }
    }
    componentDidMount(){
        AutomobileService.getAutomobiles().then((res) =>{
            console.log(res.data)
            this.setState({automobiles : res.data});
            console.log("I am a new ListAutos")
        })
    }
    render(){
        return(
            <div className="main-container">
                <div className="information-container">
                    <h2>Automobiles List</h2>
                    <div>
                        <button  className='btn--list-customer'>Add Automobile</button>
                    </div>
                    <br />
                    <div>
                        <table >
                            <thead>
                            <tr>
                                <th>Number Plate</th>
                                <th>Brand</th>
                                <th>Customer ID</th>
                                <th> Actions </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.automobiles.map(
                                    auto =>{
                                        console.log(auto)
                                        return(
                                            <tr key={auto.numberPlate}>
                                                <td>{auto.numberPlate}</td>
                                                <td>{auto.make}</td>
                                                <td>{auto.customer.customerId}</td>
                                                <td>
                                                    <button className='btn--list-customer'>Update </button>
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

export default ListAutomobiles