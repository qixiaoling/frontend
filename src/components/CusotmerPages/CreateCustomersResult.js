import React, {Component} from 'react'


class CreateCustomersResult extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            createCustomerFailed: false,
        }
        this.backToCustomerList = this.backToCustomerList.bind(this);
    }

    componentDidMount() {
        if (this.props.status === 200) {
            setTimeout(() => {
                this.setState({loading: false})
            }, 1500)
        } else {
            this.setState({createCustomerFailed: true})
        }
    }
    backToCustomerList = (e)=>{
        e.preventDefault();
        this.props.history.push('/customers');
    }


    render() {
        return (
            <>
                {this.state.createCustomerFailed ? <h2>Customer is not added, please try again</h2>
                    :
                    <>
                        {this.state.loading ? <h2>Loading...</h2>
                            :
                            <div>
                                <h2>Customer is created successfully.</h2>
                                <button className='btn--create-customer'
                                        onClick={this.backToCustomerList}>Back to Customer List</button>
                            </div>

                        }
                    </>
                }
            </>
        )
    }


}
export default CreateCustomersResult