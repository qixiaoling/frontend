import React, {Component} from 'react'
import {Button} from '../Button'


class UpdateInvoicesResult extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            updateInvoiceFailed: false,
        }
        this.backToInvoiceList = this.backToInvoiceList.bind(this);
    }

    componentDidMount() {
        if (this.props.status === 200) {
            setTimeout(() => {
                this.setState({loading: false})
            }, 1500)
        } else {
            this.setState({updateInvoiceFailed: true})
        }
    }
    backToInvoiceList = (e)=>{
        e.preventDefault();
        // this.props.history.push('/invoices');
        window.location = '/invoices';
    }


    render() {
        return (
            <>
                {this.state.updateInvoiceFailed ?
                    <>
                        <h2>You do not have the authority, please contact Admin</h2>
                        <Button className='btn'
                                buttonStyle='btn--page'
                                buttonSize='btn--medium'
                                onClick={this.backToInvoiceList}
                        >Back to Invoice List
                        </Button>
                    </>

                    :
                    <>
                        {this.state.loading ? <h2>Loading...</h2>
                            :
                            <div>
                                <h2>Inovice is updated successfully.</h2>
                                <Button className='btn'
                                        buttonStyle='btn--page'
                                        buttonSize='btn--medium'
                                        onClick={this.backToInvoiceList}
                                >Back to Invoice List
                                </Button>
                            </div>

                        }
                    </>
                }
            </>
        )
    }


}
export default UpdateInvoicesResult