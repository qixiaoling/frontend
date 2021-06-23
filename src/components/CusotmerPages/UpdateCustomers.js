import React, {Component} from 'react'
import CustomerService from "../../services/CustomerService";
import '../PageCSS/Create.css'
import {Button} from "../Button";


class UpdateCustomers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.params.id,
            firstName: '',
            lastName: '',
            gender: '',
            email: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
    }

    componentDidMount() {
        CustomerService.getCustomerById(this.state.id).then((res)=>{
            let customer = res.data;
            this.setState({
                firstName : customer.firstName,
                lastName: customer.lastName,
                gender : customer.gender,
                email : customer.email
            })
        })
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
    updateCustomer = (e) =>{
        e.preventDefault();
        let customer = {firstName: this.state.firstName, lastName: this.state.lastName,
            gender:this.state.gender, email:this.state.email};
        console.log('customer =>' +JSON.stringify(customer));
        CustomerService.updateCustomer(customer, this.state.id).then(res =>{
            this.props.history.push('/customers');
        })

    }
    cancel(){
        this.props.history.push('/customers');
    }

    render(){
        return(
            <div className="main-container-create-customer">
                <div className="information-container-create-customer">
                    <h2>Update Customer</h2>
                    <div className="customer-card-body">
                        <form className="form-create-customer">
                            <div className="form-element">
                                <label>First Name: </label>
                                <input placeholder="First Name" name="firstName" className="form-control"
                                       value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                            </div>
                            <br />
                            <div className="form-element">
                                <label>Last Name: </label>
                                <input placeholder="Last Name" name="Last Name" className="form-control"
                                       value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                            </div>
                            <br />
                            <div className="form-element">
                                <label>gender: </label>
                                <input placeholder="gender" name="gender" className="form-control"
                                       value={this.state.gender} onChange={this.changeGenderHandler}/>
                            </div>
                            <br />
                            <div className="form-element">
                                <label>email: </label>
                                <input placeholder="email" name="email" className="form-control"
                                       value={this.state.email} onChange={this.changeEmailHandler}/>
                            </div>
                            <br />
                            <div className="form-element-button">
                                <Button className='btn'
                                        buttonStyle='btn--page'
                                        buttonSize='btn--medium'
                                        onClick={this.updateCustomer}
                                >Update
                                </Button>
                                <Button className='btn'
                                        buttonStyle='btn--page'
                                        buttonSize='btn--medium'
                                        onClick={this.cancel.bind(this)}
                                        style={{marginLeft:"10px"}}>
                                    Cancel
                                </Button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        )
    }
}
export default UpdateCustomers