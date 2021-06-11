import React, {Component} from 'react'
import './Login.css'
import axios from "axios";
import {Redirect} from 'react-router-dom'

class Login extends Component {

    constructor() {
        super();

        this.state = {
        }


    }

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            username: this.username,
            password: this.password
        }
        console.log(data.username)
        axios.post('http://localhost:8080/login', data)
            .then(res => {

                localStorage.setItem('token', res.headers.authorization);
                this.setState({
                    loggedIn: true
                })
                console.log(res.headers.authorization)

                localStorage.setItem('userName', this.username);
            })


    }



    render() {
        if (this.state.loggedIn) {
            return <Redirect to={'/'}/>
        }
        return (

            <div className="login-popup">
                <div className="box">
                    <div className="img-area">
                        <div className="img">
                        </div>
                        <h1 className="img-title">eGineRight</h1>
                    </div>
                    <div className="form">
                        <div className="close">&times;</div>
                        <h1 className="login-popup-title">Sign In</h1>
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder="username" className="form-control"
                                       onChange={e => this.username = e.target.value}/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="password" className="form-control"
                                       onChange={e => this.password = e.target.value}/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox"/>
                                <label> Remember Me
                                </label>
                            </div>
                            <button type="button" className="btn" onClick={this.handleSubmit}>Sign In</button>
                        </form>
                    </div>

                </div>
            </div>


        );

    }

}

export default Login

