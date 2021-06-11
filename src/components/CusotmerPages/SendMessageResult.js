import React, {Component} from 'react'
import './CreateCustomers.css'
class SendMessageResult extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            emailFailed : false,
        }

    }


    componentDidMount() {
        if(this.props.status === 200) {
            setTimeout(() => {
                this.setState({loading: false})
            }, 1500)
        }else{
            this.setState({emailFailed : true})
        }


    }


    render(){
        return(
            <>
                {this.state.emailFailed ?<h2>Your email is failed, please try again</h2>
                :
                    <>
                        {this.state.loading === true ? <h2>Loading...</h2>
                            :
                            <div>
                                <h2>Your message is successfully sent.</h2>
                            </div>}
                    </>
                }
            </>

        )
    }

}
export default SendMessageResult