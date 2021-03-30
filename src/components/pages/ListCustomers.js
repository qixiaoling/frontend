import React, {Component} from 'react'
import CustomerService from "../../services/CustomerService";
import '../Button.css'

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