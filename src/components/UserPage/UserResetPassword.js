import React, {Component} from 'react'
import axios from "axios";
import AdminService from "../../services/AdminService";
import UserService from "../../services/UserService";

const loggedInUsername = localStorage.getItem('userName')

class UserResetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loggedInUserId: '',
            loggedInUser: {},
            password: '',
            password_reEntry: '',
        }
        this.getLoggedInUserId = this.getLoggedInUserId.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePasswordReEntryChange = this.handlePasswordReEntryChange.bind(this);
        this.resetPassword = this.resetPassword.bind(this);

    }


    componentDidMount() {
        try {
            AdminService.getAllUsers().then((res) => {
                console.log(res.data);
                this.setState({users: res.data})
            })

        } catch (error) {
            console.log(error)
        }
    }

    getLoggedInUserId(userName) {
        if (this.state.users) {
            this.setState({
                loggedInUser: this.state.users.find((user) =>
                    user.userName === userName)
            })
        }
        this.setState({loggedInUserId: this.state.loggedInUser.user_id})
        return this.state.loggedInUserId
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }
    handlePasswordReEntryChange = (e) => {
        this.setState({password_reEntry: e.target.value})
    }

    resetPassword(e) {
        e.preventDefault()
        const specificId = this.getLoggedInUserId(loggedInUsername)
        let body = {
            password: this.state.password
        }
        try {
            UserService.resetPassword(specificId, body).then((res) => {
                this.props.history.push('/')
            })
        } catch (error) {
            console.log(error)
        }


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