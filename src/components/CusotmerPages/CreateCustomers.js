import React, {Component} from 'react'
import CustomerService from "../../services/CustomerService";
import '../PageCSS/Create.css'
import CreateCustomersResult from "./CreateCustomersResult";
import {Button} from '../Button'

const initialState = {
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    firstNameEmptyError: '',
    firstNameSpecialCharError: '',
    lastNameEmptyError: '',
    lastNameSpecialCharError: '',
    emailEmptyError: '',
    emailInvalidError: '',

}


class CreateCustomers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState,
            status: '',
        };

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
        this.postCustomer = this.postCustomer.bind(this);
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
            this.postCustomer();

        }


    }

    async postCustomer(){
        let customer = {
            firstName: this.state.firstName, lastName: this.state.lastName,
            gender: this.state.gender, email: this.state.email
        };
        console.log('customer =>' + JSON.stringify(customer));

        try{
            const response = await CustomerService.createCustomers(customer)
            console.log(response)
            this.setState({status : response.status})
            console.log("THE STATE IS NOW:", this.state.status)
            console.log(response);
        }catch (err){

            this.setState({status : 403})
            console.log(err);
        }

        this.setState(initialState)
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
        let emailEmptyError = ''
        let emailInvalidError = ''

        if (!this.state.firstName) {
            firstNameEmptyError = 'This field cannot be empty';
        }else if (!regex.test(this.state.firstName.trim())) {
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


        if (!this.state.lastName) {
            lastNameEmptyError = 'This field cannot be empty';
        }else if (!regex.test(this.state.lastName.trim())) {
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



        if (!this.state.email) {
            emailEmptyError = 'This field cannot be empty';
        }else if (!this.state.email.includes("@")) {
            emailInvalidError = 'Email is not valid';
        }
        if (emailEmptyError) {
            this.setState({emailEmptyError})
            return false;
        }
        if (emailInvalidError) {
            this.setState({emailInvalidError})
            return false;
        }

        return true

    }

    render() {
        return (
            <>
                {this.state.status ? <CreateCustomersResult status={this.state.status} history={this.props.history}/>
                    :
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
                                    <div className='alert alert-danger'>{this.state.emailEmptyError}</div>
                                    <div className='alert alert-danger'>{this.state.emailInvalidError}</div>

                                    <br/>
                                    <div className="form-element-button">
                                        <Button
                                                onClick={this.saveCustomer}
                                                className='btn'
                                                buttonStyle='btn--page'
                                                buttonSize='btn--medium'
                                        >Save
                                        </Button>
                                        <Button
                                                onClick={this.cancel.bind(this)}
                                                className='btn'
                                                buttonStyle='btn--page'
                                                buttonSize='btn--medium'
                                                style={{marginLeft: "10px"}}>
                                            Cancel
                                        </Button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                }
            </>
        )
    }

}

export default CreateCustomers