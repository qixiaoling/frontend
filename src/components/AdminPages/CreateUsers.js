import React, {Component} from 'react'

import AdminService from "../../services/AdminService";

const initialState = {
    userName: '',
    password: '',
    email: '',
    userNameEmptyError: '',
    userNameSpecialCharError: '',
    passwordEmptyError: '',
    passwordTooShortError: '',
    emailEmptyError: '',
    emailInvalidError: '',
}

class CreateUsers extends Component{
    constructor(props) {
        super(props);
        this.state = initialState;
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }
    changeUserNameHandler = (e) => { //这里不能写function(), 要用()=>
        this.setState({userName: e.target.value});
    }
    changePasswordHandler = (e) => {
        this.setState({password: e.target.value});
    }
    changeEmailHandler = (e) => {
        this.setState({email: e.target.value});

    }

    saveUser = (e) => {
        e.preventDefault();
        console.log("I am here")

        const isValid = this.validate();
        console.log(isValid)
        if(isValid){
            let user = {
                userName : this.state.userName,
                password : this.state.password,
                email : this.state.email
            }
            console.log('user => ' + JSON.stringify(user));
            AdminService.createUser(user)
                .then((res)=>{
                    console.log("hello world")
                })
            this.setState(initialState)
        }
    }

    validate = () => {

        const regex = /^[A-Za-z0-9 ]+$/

        let userNameEmptyError = ''
        let userNameSpecialCharError = ''
        let passwordEmptyError = ''
        let passwordTooShortError = ''
        let emailEmptyError = ''
        let emailInvalidError = ''

        if (this.state.userName.length === 0) {
            userNameEmptyError = 'This field cannot be empty';
        }
        if (!regex.test(this.state.userName)) {
            userNameSpecialCharError = 'You are not allowed to use special character(S)';
        }

        if(userNameEmptyError){
            this.setState({userNameEmptyError})
            return false;
        }
        if(userNameSpecialCharError){
            this.setState({userNameSpecialCharError})
            return false;
        }



        if (this.state.password.length === 0) {
            passwordEmptyError = 'This field cannot be empty';
        }
       if(this.state.password.length < 8){
           passwordTooShortError = 'Please use minimal 8 characters'
       }

       if(passwordEmptyError){
           this.setState({passwordEmptyError})
           return false;
       }
       if(passwordTooShortError){
           this.setState({passwordTooShortError})
           return false;
       }

        if (this.state.email.length === 0) {
            emailEmptyError = 'This field cannot be empty';
        }
        if(!this.state.email.includes("@")){
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




    render(){
        return(
            <div className='main-container-create-customer'>
                <div className='information-container-create-customer'>
                    <h2>Add User</h2>
                    <div className='customer-card-body'>
                        <form className='form-create-customer' >
                            <div className='form-element'>
                                <label htmlFor='userName'>User Name：</label>
                                <input
                                    type='text'
                                    id='userName'
                                    name='userName'

                                    value={this.state.userName}
                                    onChange={this.changeUserNameHandler}
                                />
                                <div className='alert alert-danger'>{this.state.userNameEmptyError}</div>
                                <div className='alert alert-danger'>{this.state.userNameSpecialCharError}</div>
                            </div>


                            <div className='form-element'>
                                <label htmlFor='password'>Password：</label>
                                <input
                                    type='password'
                                    id='password'
                                    name='password'

                                    value={this.state.password}
                                    onChange={this.changePasswordHandler}

                                />
                            </div>
                            <div className='alert alert-danger'>{this.state.passwordEmptyError}</div>
                            <div className='alert alert-danger'>{this.state.passwordTooShortError}</div>


                            <div className='form-element'>
                                <label htmlFor='email'>Email：</label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.changeEmailHandler}
                                />
                            </div>
                            <div className='alert alert-danger'>{this.state.emailEmptyError}</div>
                            <div className='alert alert-danger'>{this.state.emailInvalidError}</div>

                            <button type='button' className='btn--create-customer' onChange={(e)=>this.saveUser}>
                                Create
                            </button>
                        </form>

                    </div>
                </div>

            </div>


        )
    }



}
export default CreateUsers