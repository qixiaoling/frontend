import React, {Component} from 'react'
import CustomerService from "../../services/CustomerService";
import './CreateCustomers.css'

const initialState = {
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    firstNameEmptyError: '',
    firstNameSpecialCharError: '',
    lastNameEmptyError: '',
    lastNameSpecialCharError:  '',
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

        const regex = /^[A-Za-z0-9 ]+$/

        let firstNameEmptyError = ''
        let firstNameSpecialCharError = ''
        let lastNameEmptyError = ''
        let lastNameSpecialCharError = ''
        let genderError = ''
        let emailError = ''

        if (this.state.firstName.length === 0) {
            firstNameEmptyError = 'This field cannot be empty';
        }
        if (!regex.test(this.state.firstName.trim())) {
            firstNameSpecialCharError = 'You are not allowed to use special character(S)';
        }


        if (firstNameEmptyError) {
            this.setState({firstNameEmptyError})
            return false;
        }
        if (firstNameSpecialCharError) {
            this.setState({firstNameSpecialCharError})
            return false;
        }



        if (this.state.lastName.length === 0) {
            lastNameEmptyError = 'This field cannot be empty';
        }
        if (!regex.test(this.state.lastName.trim())) {
            lastNameSpecialCharError = 'You are not allowed to use special character(S)';
        }


        if (lastNameEmptyError) {
            this.setState({lastNameEmptyError})
            return false;
        }
        if (lastNameSpecialCharError) {
            this.setState({lastNameSpecialCharError})
            return false;
        }
        if (this.state.gender.length === 0) {
            genderError = 'This field cannot be empty';
        }
        if (genderError) {
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
                            <div className='alert alert-danger'>{this.state.firstNameEmptyError}</div>
                            <div className='alert alert-danger'>{this.state.firstNameSpecialCharError}</div>
                            <br/>
                            <div className="form-element">
                                <label>Last Name: </label>
                                <input placeholder="Last Name" name="Last Name" className="form-control"
                                       value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                            </div>
                            <div className='alert alert-danger'>{this.state.lastNameEmptyError}</div>
                            <div className='alert alert-danger'>{this.state.lastNameSpecialCharError}</div>

                            <br/>
                            {/*<div className="form-element">*/}
                            {/*    <label>gender: </label>*/}
                            {/*    <input placeholder="gender" name="gender" className="form-control"*/}
                            {/*           value={this.state.gender} onChange={this.changeGenderHandler}/>*/}
                            {/*</div>*/}
                            {/*<div className='alert alert-danger'>{this.state.genderError}</div>*/}

                            <div className="form-element">
                                Gender
                                <label htmlFor='gender'>
                                    Female
                                    <input
                                        type='radio'
                                        id='gender'
                                        name='gender'
                                        value='FEMALE'
                                        onChange={this.changeGenderHandler}
                                    />
                                </label>
                                <label htmlFor='gender'>
                                    Male
                                    <input
                                        type='radio'
                                        id='gender'
                                        name='gender'
                                        value='MALE'
                                        onChange={this.changeGenderHandler}
                                    />
                                </label>
                            </div>

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