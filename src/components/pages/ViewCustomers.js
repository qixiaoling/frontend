import React, {Component} from 'react'
import CustomerService from "../../services/CustomerService";
import './ViewCustomer.css'

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
            <div className="main-container-view-customer">
                <div className="information-container-view-customer">
                    <h2>View Customer Details</h2>
                    <div className="view-customer-card-body">
                        <div className="view-customer-element">
                            <label> First Name: </label>
                            <div>{this.state.customer.firstName}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Last Name: </label>
                            <div>{this.state.customer.lastName}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Gender: </label>
                            <div>{this.state.customer.gender}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Email: </label>
                            <div>{this.state.customer.email}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> First Name: </label>
                            <div>{this.state.customer.firstName}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Last Name: </label>
                            <div>{this.state.customer.lastName}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Gender: </label>
                            <div>{this.state.customer.gender}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Email: </label>
                            <div>{this.state.customer.email}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> First Name: </label>
                            <div>{this.state.customer.firstName}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Last Name: </label>
                            <div>{this.state.customer.lastName}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Gender: </label>
                            <div>{this.state.customer.gender}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Email: </label>
                            <div>{this.state.customer.email}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> First Name: </label>
                            <div>{this.state.customer.firstName}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Last Name: </label>
                            <div>{this.state.customer.lastName}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Gender: </label>
                            <div>{this.state.customer.gender}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Email: </label>
                            <div>{this.state.customer.email}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> First Name: </label>
                            <div>{this.state.customer.firstName}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Last Name: </label>
                            <div>{this.state.customer.lastName}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Gender: </label>
                            <div>{this.state.customer.gender}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Email: </label>
                            <div>{this.state.customer.email}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ViewCustomers