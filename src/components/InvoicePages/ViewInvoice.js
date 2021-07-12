import React, {Component} from 'react'
import '../PageCSS/List.css'
import InvoiceService from "../../services/InvoiceService";
import invoiceRoundDownEuroSign from "../../helpers/roundDownEuroSign";



class ViewInvoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.params.id,
            totalPreTax: '',
            taxRate: '',
            totalFee: '',
            invoiceSent: false,
            invoicePaid: false,
        }
    }

    componentDidMount() {
        InvoiceService.getInvoiceById(this.state.id).then((res) => {
            let invoice = res.data;
            this.setState({
                totalPreTax: invoice.totalPreTax,
                taxRate: invoice.taxRate,
                totalFee: invoice.totalFee,
                invoiceSent: invoice.invoiceSent,
                invoicePaid: invoice.invoicePaid,
            })
            console.log(invoice)
            console.log(this.state.invoiceSent)
        })
    }



    render(){
        return(
            <div className="main-container-view-customer">
                <div className="information-container-view-customer">
                    <h2> View Invoice Details</h2>
                    <div className="view-customer-card-body">
                        <div className="view-customer-element">
                            <label>Total PreTax Amount: </label>
                            <div>{invoiceRoundDownEuroSign(this.state.totalPreTax)}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Tax Rate: </label>
                            <div>{this.state.taxRate}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Total Fee: </label>
                            <div>{invoiceRoundDownEuroSign(this.state.totalFee)}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Send Status: </label>
                            <div>{this.state.invoiceSent.toString()}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Pay Status: </label>
                            <div>{this.state.invoicePaid.toString()}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ViewInvoice