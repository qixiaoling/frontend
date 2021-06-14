import React, {Component} from 'react'
import '../PageCSS/CreateCustomers.css'
class SendMessageResult extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            emailFailed : false,
        }
        this.backToCustomerList = this.backToCustomerList.bind(this);

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

    backToCustomerList = (e)=>{
        this.props.history.push('/customers');
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
                                <button className='btn--create-customer'
                                        onClick={this.backToCustomerList}>Back to Customer List</button>
                            </div>}
                    </>
                }
            </>

        )
    }

}
export default SendMessageResult