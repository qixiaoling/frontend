import React, {Component} from 'react'
import axios from "axios";
import AdminService from "../../services/AdminService";
import UserService from "../../services/UserService";

const loggedInUsername = localStorage.getItem('userName')

const initialState = {
    users: [],
    loggedInUserId: '',
    password: '',
    password_reEntry: '',
    passwordError:'',
}

class UserResetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialState
        }
        this.getLoggedInUserId = this.getLoggedInUserId.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePasswordReEntryChange = this.handlePasswordReEntryChange.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
        this.validate = this.validate.bind(this);
    }


    componentDidMount() {
        try {
            AdminService.getAllUsers().then((res) => {
                console.log(res.data);
                this.setState({users: res.data})
                console.log(this.getLoggedInUserId(loggedInUsername))
            })

        } catch (error) {
            console.log(error)
        }


    }

    getLoggedInUserId(loginname) {

        const loggedInUser = this.state.users.find((user) =>
            user.userName === loginname)
        this.setState({loggedInUserId:loggedInUser.user_id })
        return this.state.loggedInUserId


    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }
    handlePasswordReEntryChange = (e) => {
        this.setState({password_reEntry: e.target.value})
    }

    resetPassword = (e) => {
        e.preventDefault()
        const isValid = this.validate();
        if(isValid){
            let body = {
                password: this.state.password
            }
            try {
                UserService.resetPassword(body, this.state.loggedInUserId).then((res) => {
                    console.log(res.status)
                    this.props.history.push('/')
                })
            } catch (error) {
                console.log(error)
            }
            this.setState(initialState)
        }





    }

    validate = () =>{
        let passwordError = ''
        if(this.state.password_reEntry != this.state.password){
            passwordError = 'Passwords are not identical'
        }
        if(passwordError){
            this.setState({passwordError})
            return false;
        }
        return true
    }
    render() {

        return (
            <>
                <div className="main-container-create-customer">
                    <div className='information-container-create-customer'>
                        <h2>Hi {loggedInUsername} ! Please reset Your Password</h2>
                        <div className='customer-card-body'>
                            <form className='form-create-customer'>
                                <div className='form-element'>
                                    <label htmlFor='password'>Your New Password</label>
                                    <input
                                        type='password'
                                        id='password'
                                        name='password'
                                        value={this.state.password}
                                        onChange={this.handlePasswordChange}
                                    />
                                </div>
                                <div className='form-element'>
                                    <label htmlFor='password-reEntry'>Comfirm Your Password</label>
                                    <input
                                        type='password'
                                        id='password-reEntry'
                                        name='password-reEntry'
                                        value={this.state.password_reEntry}
                                        onChange={this.handlePasswordReEntryChange}
                                    />
                                </div>
                                <div className='alert alert-danger'>{this.state.passwordError}</div>
                                <button className='btn--create-customer'
                                        onClick={this.resetPassword}>
                                    Reset Password
                                </button>
                            </form>

                        </div>
                    </div>

                </div>
            </>
        )
    }

}

export default UserResetPassword