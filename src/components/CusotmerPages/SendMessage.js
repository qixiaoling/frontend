import React, {Component} from 'react';
import CustomerService from "../../services/CustomerService";
import './CreateCustomers.css'

class SendMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            username: '',
            email: '',
            feedback: '',
        }
        this.changeAppUserEmailHandler = this.changeAppUserEmailHandler.bind(this);
        this.changeAppUserFeedback = this.changeAppUserFeedback.bind(this);
        this.changeAppUserUsernameHandler = this.changeAppUserUsernameHandler.bind(this);
        this.confirmSendMessage = this.confirmSendMessage.bind(this);
        this.cancel = this.cancel.bind(this);
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

    confirmSendMessage() {
        let appUser = {username: this.state.username, email: this.state.email,
        feedback: this.state.feedback}
        CustomerService.confirmSendMessage(appUser, this.state.id).then((res)=>{
            this.props.history.push(`/send-message-result/${this.state.id}`);
        })

    }
    cancel(){
        this.props.history.push('/customers')
    }

    render() {
        return (
            <div className="main-container-create-customer">
                <div className="information-container-create-customer">
                    <h2>Please fill in your details</h2>
                    <div className="customer-card-body">
                        <form className="form-create-customer">
                            <div className="form-element">
                                <label>Username: </label>
                                <input placeholder="Username" name="username" className="form-control"
                                       value={this.state.username} onChange={this.changeAppUserUsernameHandler}/>
                            </div>
                            <br/>
                            <div className="form-element">
                                <label>Email: </label>
                                <input placeholder="Email" name="email" className="form-control"
                                       value={this.state.email} onChange={this.changeAppUserEmailHandler}/>
                            </div>
                            <br/>
                            <div className="form-element">
                                <label>Feedback: </label>
                                <input placeholder="Feedback" name="feedback" className="form-control"
                                       value={this.state.feedback} onChange={this.changeAppUserFeedback}/>
                            </div>
                            <br/>
                            <div className="form-element-button">
                                <button className='btn--create-customer' onClick={this.confirmSendMessage}>Send</button>
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

export default SendMessage;