import React, {Component} from 'react'
import CustomerService from "../../services/CustomerService";
import '../Button.css'

class ListCustomers extends Component {
    constructor() {
        super()
        this.state = {
            customers: []
        }

    }
    componentDidMount(){
        console.log("i am about to get the customer from the server")
        CustomerService.getCustomers().then((res) =>{
            this.setState({customers : res.data});
        })
    }



    render(){
        return(
            <div>
                {this.state.customers.firstName}
            </div>
            )


    }


}
export default ListCustomers