import React, {Component} from 'react'
import AutomobileService from "../../services/AutomobileService";
import'../CusotmerPages/ListCustomers.css'
import axios from "axios";
import CustomerService from "../../services/CustomerService";

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
    constructor(props) {
        super(props)
        this.state={
            automobiles: []
        }
        this.deleteAutomobile = this.deleteAutomobile.bind(this)
        this.editAutomobile = this.editAutomobile.bind(this)
        this.viewAutomobile = this.viewAutomobile.bind(this)
    }
    componentDidMount(){
        AutomobileService.getAutomobiles().then((res) =>{
            console.log(res.data)
            this.setState({automobiles : res.data});
            console.log("I list cars.")
        })
    }

    deleteAutomobile(numberPlate){
        AutomobileService.deleteAutomobiles(numberPlate).then(res=>{
            this.setState({automobiles: this.state.automobiles.filter(auto => auto.numberPlate !== numberPlate)})
        })
    }
    editAutomobile(numberPlate){
       this.props.history.push(`/update-automobile/${numberPlate}`)

    }
    viewAutomobile(numberPlate){
        this.props.history.push(`/view-automobile/${numberPlate}`)
    }


    render(){
        return(
            <div className="main-container">
                <div className="information-container">
                    <h2>Automobiles List</h2>
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
                                            <tr key={auto.car. numberPlate}>
                                                <td>{auto.car. numberPlate}</td>
                                                <td>{auto.car. make}</td>
                                                <td>{auto.customerId}</td>
                                                <td>
                                                    <button className='btn--list-customer' onClick={()=>{this.editAutomobile(auto.car.numberPlate)}}>Update </button>
                                                    <button className='btn--list-customer' onClick={()=>{this.deleteAutomobile(auto.car.numberPlate)}}>Delete </button>
                                                    <button className='btn--list-customer' onClick={()=>{this.viewAutomobile(auto.car.numberPlate)}}>View </button>
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