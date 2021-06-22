import React, {Component} from 'react';
import CustomerService from "../../services/CustomerService";
import '../PageCSS/Create.css'
import SendMessageResult from "./SendMessageResult";
import {Button} from "../Button";

const initialState = {
    username: '',
    email: '',
    feedback: '',
    emailError: '',
    msgEmptyError: '',

}

class SendMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            initialState,
            status: '',
        }
        this.changeAppUserEmailHandler = this.changeAppUserEmailHandler.bind(this);
        this.changeAppUserFeedback = this.changeAppUserFeedback.bind(this);
        this.changeAppUserUsernameHandler = this.changeAppUserUsernameHandler.bind(this);
        this.confirmSendMessage = this.confirmSendMessage.bind(this);
        this.cancel = this.cancel.bind(this);
        this.validate = this.validate.bind(this);
    }

    changeAppUserUsernameHandler = (e) => {
        this.setState({userName: e.target.value});
    }
    changeAppUserEmailHandler = (e) => {
        this.setState({email: e.target.value});
    }
    changeAppUserFeedback = (e) => {
        this.setState({feedback: e.target.value});
    }

    confirmSendMessage(e) {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            let appUser = {
                username: this.state.username, email: this.state.email,
                feedback: this.state.feedback
            }
            CustomerService.confirmSendMessage(appUser, this.state.id).then((res) => {
                console.log(res.status)
                this.setState({status: res.status})
            })
            this.setState(initialState)

        }
    }

    cancel() {
        this.props.history.push('/customers')
    }

    validate = () => {


        let emailError = ''
        let msgEmptyError = ''


        if (!this.state.email.includes("@") || (this.state.email.length === 0)) {
            emailError = 'invalid email';
        }
        if (emailError) {
            this.setState({emailError})
            return false;
        }

        if (this.state.feedback.length === 0) {
            msgEmptyError = 'this field cannot be empty';
        }
        if (msgEmptyError) {
            this.setState({msgEmptyError})
            return false;
        }
        return true;

    }

    render() {
        return (
            <>
                {this.state.status ? <SendMessageResult status={this.state.status} history={this.props.history}/> :
                    <div className="main-container-create-customer">
                        <div className="information-container-create-customer">
                            <h2>Please fill in your details</h2>
                            <div className="customer-card-body">
                                <form className="form-create-customer">
                                    <div className="form-element">
                                        <label>Username: </label>
                                        <input placeholder="Username" name="username" className="form-control"
                                               value={localStorage.getItem('userName')}
                                               onChange={this.changeAppUserUsernameHandler}/>
                                    </div>
                                    <br/>
                                    <div className="form-element">
                                        <label>Email: </label>
                                        <input placeholder="Email" name="email" className="form-control"
                                               value={this.state.email} onChange={this.changeAppUserEmailHandler}/>
                                    </div>
                                    <div className='alert alert-danger'>{this.state.emailError}</div>
                                    <br/>
                                    <div className="form-element">
                                        <label>Feedback: </label>
                                        <input placeholder="Feedback" name="feedback" className="form-control"
                                               value={this.state.feedback} onChange={this.changeAppUserFeedback}/>
                                    </div>
                                    <div className='alert alert-danger'>{this.state.msgEmptyError}</div>
                                    <br/>
                                    <br/>
                                    <div className="form-element-button">
                                        <Button
                                            className='btn'
                                            buttonStyle='btn--page'
                                            buttonSize='btn--medium'
                                            onClick={this.confirmSendMessage}>Send
                                        </Button>
                                        <Button
                                            className='btn'
                                            buttonStyle='btn--page'
                                            buttonSize='btn--medium'
                                            onClick={this.cancel.bind(this)}
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

export default SendMessage