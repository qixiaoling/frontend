import React, {Component} from 'react'
import CustomerService from "../../services/CustomerService";
import './CreateCustomers.css'

const initialState = {
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    firstNameError: '',
    lastNameError: '',
    genderError: '',
    emailError: '',

}


class CreateCustomers extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
    }


    changeFirstNameHandler = (e) => { //这里不能写function(), 要用()=>
        this.setState({firstName: e.target.value});

    }
    changeLastNameHandler = (e) => {
        this.setState({lastName: e.target.value});

    }
    changeGenderHandler = (e) => {
        this.setState({gender: e.target.value});
    }
    changeEmailHandler = (e) => {
        this.setState({email: e.target.value});

    }
    saveCustomer = (e) => {
        e.preventDefault();

        const isValid = this.validate();
        if (isValid) {
            let customer = {
                firstName: this.state.firstName, lastName: this.state.lastName,
                gender: this.state.gender, email: this.state.email
            };
            console.log('customer =>' + JSON.stringify(customer));

            CustomerService.createCustomers(customer)
                .then(res => {
                    this.props.history.push('/customers')
                })
            this.setState(initialState)
        }


    }

    cancel() {
        this.props.history.push('/customers');
    }

    validate = () => {
        let firstNameError = ''
        let lastNameError = ''
        let genderError = ''
        let emailError = ''

        if(this.state.firstName.length === 0){
            firstNameError = 'This field cannot be empty';
        }
        if(firstNameError){
            this.setState({firstNameError})
            return false;
        }
        if(this.state.lastName.length === 0){
            lastNameError = 'This field cannot be empty';
        }
        if(lastNameError){
            this.setState({lastNameError})
            return false;
        }
        if(this.state.gender.length === 0){
            genderError = 'This field cannot be empty';
        }
        if(genderError){
            this.setState({genderError})
            return false;
        }

        if (!this.state.email.includes("@") || (this.state.email.length === 0)) {
            emailError = 'invalid email';
        }
        if (emailError) {
            this.setState({emailError})
            return false;
        }

        return true

    }

    render() {
        return (
            <div className="main-container-create-customer">
                <div className="information-container-create-customer">
                    <h2>Add Customer</h2>
                    <div className="customer-card-body">
                        <form className="form-create-customer">
                            <div className="form-element">
                                <label>First Name: </label>
                                <input placeholder="First Name" name="firstName" className="form-control"
                                       value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                            </div>
                            <div className='alert alert-danger'>{this.state.firstNameError}</div>
                            <br/>
                            <div className="form-element">
                                <label>Last Name: </label>
                                <input placeholder="Last Name" name="Last Name" className="form-control"
                                       value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                            </div>
                            <div className='alert alert-danger'>{this.state.lastNameError}</div>
                            <br/>
                            <div className="form-element">
                                <label>gender: </label>
                                <input placeholder="gender" name="gender" className="form-control"
                                       value={this.state.gender} onChange={this.changeGenderHandler}/>
                            </div>
                            <div className='alert alert-danger'>{this.state.genderError}</div>
                            <br/>
                            <div className="form-element">
                                <label>email: </label>
                                <input placeholder="email" name="email" className="form-control"
                                       value={this.state.email} onChange={this.changeEmailHandler}/>
                            </div>
                            <div className='alert alert-danger'>{this.state.emailError}</div>
                            <br/>
                            <div className="form-element-button">
                                <button className='btn--create-customer' onClick={this.saveCustomer}>Save</button>
                                <button className='btn--create-customer' onClick={this.cancel.bind(this)}
                                        style={{marginLeft: "10px"}}>
                                    Cancel
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default CreateCustomers