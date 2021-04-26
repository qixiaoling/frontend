import React, {Component} from 'react'
import InspectionService from "../../services/InspectionService";
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

class ListInspections extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inspections : []
        }
        this.editInspection = this.editInspection.bind(this);
        this.deleteInspection = this.deleteInspection.bind(this);
        this.viewInspection = this.viewInspection.bind(this);
    }

    componentDidMount() {
        InspectionService.getInspections().then(res =>{
            console.log(res.data)
            this.setState({inspections : res.data})
            console.log("I am a listed inspection object.")
        })
    }

    editInspection(inspectionNumber){
        this.props.history.push(`/update-inspection/${inspectionNumber}`)
    }
    deleteInspection(inspectionNumber){
        InspectionService.deleteInspections(inspectionNumber).then(res=>{
            this.setState({inspections: this.state.ins.filter(ins => ins.inspectionNumber != inspectionNumber) })
        })
    }
    viewInspection(inspectionNumber){
        this.props.history.push(`/view-inspection/${inspectionNumber}`)
    }

    render(){
        return(
            <div className="main-container">
                <div className="information-container">
                    <h2>Inspection List</h2>
                    <br />
                    <div>
                        <table >
                            <thead>
                            <tr>
                                <th>Inspection Number</th>
                                <th>inspection Date</th>
                                <th>Fee</th>
                                <th>Repair Date </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.inspections.map(
                                    ins =>{
                                        console.log(ins)
                                        return(
                                            <tr key={ins.inspectionNumber}>
                                                <td>{ins.inspectionNumber}</td>
                                                <td>{ins.inspectionDate}</td>
                                                <td>{ins.inspectionFee}</td>
                                                <td>{ins.repairDate}</td>
                                                <td>
                                                    <button className='btn--list-customer' onClick={()=>{this.editInspection(ins.inspectionNumber)}} >Update </button>
                                                    <button className='btn--list-customer' onClick={()=>{this.deleteInspection(ins.inspectionNumber)}}>Delete </button>
                                                    <button className='btn--list-customer' onClick={()=>{this.viewInspection(ins.inspectionNumber)}}>View </button>
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
export default ListInspections