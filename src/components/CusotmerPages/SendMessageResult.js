import React, {Component} from 'react'
import './CreateCustomers.css'
class SendMessageResult extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sendMessageResult : '',
        }
    }
    render(){
        return(
            <div>
                <h2>Your message is successfully sent.</h2>
            </div>
        )
    }

}
export default SendMessageResult