import React, {Component} from 'react'
import CustomerService from "../../services/CustomerService";

class ViewCustomers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            customer: {}
        }
    }
    componentDidMount() {
        CustomerService.getCustomerById(this.state.id).then(res=>{
            this.setState({customer: res.data})
        })
    }
    render(){
        return(
            <div>
                <div>
                    <h3>View Customer Details</h3>
                    <div>
                        <div>
                            <label> Customer First Name: </label>
                            <div>{this.state.customer.firstName}</div>
                        </div>
                        <div>
                            <label> Customer Last Name: </label>
                            <div>{this.state.customer.lastName}</div>
                        </div>
                        <div>
                            <label> Customer Gender: </label>
                            <div>{this.state.customer.gender}</div>
                        </div>
                        <div>
                            <label> Customer Email: </label>
                            <div>{this.state.customer.email}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ViewCustomers