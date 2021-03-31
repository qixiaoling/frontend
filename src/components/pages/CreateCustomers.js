import React, {Component} from 'react'
import CustomerService from "../../services/CustomerService";

class CreateCustomers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            email: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
    }

    changeFirstNameHandler =(e) =>{
        this.setState({firstName: e.target.value});
    }
    changeLastNameHandler =(e) =>{
        this.setState({lastName: e.target.value});
    }
    changeGenderHandler =(e) =>{
        this.setState({gender: e.target.value});
    }
    changeEmailHandler =(e) =>{
        this.setState({email: e.target.value});
    }
    saveCustomer = (e) =>{
        e.preventDefault();
        let customer = {firstName: this.state.firstName, lastName: this.state.lastName,
            gender:this.state.gender, email:this.state.email};
        console.log('customer =>' +JSON.stringify(customer));

        CustomerService.createCustomers(customer)
            .then(res =>{ this.props.history.push('/customers')})
        //     console.log(res)
        // })
        // .catch(err =>{
        //     console.log(err)
        // })
    }
    cancel(){
        this.props.history.push('/customers');
    }

    render(){
        return(
            <div>
                <div>
                    <h3>Add Customer</h3>
                    <div className="customer-card-body">
                        <form>
                            <div>
                                <label>First Name: </label>
                                <input placeholder="First Name" name="firstName" className="form-control"
                                       value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                            </div>
                            <div>
                                <label>Last Name: </label>
                                <input placeholder="Last Name" name="Last Name" className="form-control"
                                       value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                            </div>
                            <div>
                                <label>gender: </label>
                                <input placeholder="gender" name="gender" className="form-control"
                                       value={this.state.gender} onChange={this.changeGenderHandler}/>
                            </div>
                            <div>
                                <label>email: </label>
                                <input placeholder="email" name="email" className="form-control"
                                       value={this.state.email} onChange={this.changeEmailHandler}/>
                            </div>
                            <button className="btn btn--medium" onClick={this.saveCustomer}>Save</button>
                            <button className="btn btn--medium" onClick={this.cancel.bind(this)}
                                    style={{marginLeft:"10px"}}>
                                    Cancel
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}
export default CreateCustomers