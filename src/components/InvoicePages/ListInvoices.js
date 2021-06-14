import React, {Component} from 'react'
import InvoiceService from "../../services/InvoiceService";
import '../PageCSS/List.css'

class ListInvoices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invoices: [],
        }
        this.updateInvoice = this.updateInvoice.bind(this);
        this.viewInvoice = this.viewInvoice.bind(this);
        this.deleteInvoice = this.deleteInvoice.bind(this);
    }

    componentDidMount() {
        InvoiceService.getInvoices().then((res) => {
            console.log(res.data)
            this.setState({invoices: res.data})

        })
    }

    updateInvoice(invoiceId) {
        this.props.history.push(`/update-invoice/${invoiceId}`)
    }

    viewInvoice(invoiceId) {
        this.props.history.push(`/view-invoice/${invoiceId}`)
    }

    deleteInvoice(invoiceId) {
        InvoiceService.deleteInvoiceById(invoiceId).then((res) => {
            this.setState({invoices: this.state.invoices.filter(inv => inv.invoiceId !== invoiceId)})
        })
    }

    render() {
        return (
            <div className="main-container">
                <div className="information-container">
                    <h2>Invoice List</h2>
                    <br/>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th>Invoice id</th>
                                <th>Total PreTax Amount</th>
                                <th>Total Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.invoices.map(
                                    inv => {
                                        console.log(inv)
                                        return (
                                            <tr key={inv.invoiceId}>
                                                <td>{inv.invoiceId}</td>
                                                <td>{inv.totalPreTax}</td>
                                                <td>{inv.totalFee}</td>
                                                <td>
                                                    <button className='btn--list-customer' onClick={(e) => {
                                                        this.updateInvoice(inv.invoiceId)
                                                    }}>Update
                                                    </button>
                                                    <button className='btn--list-customer' onClick={(e)=>{
                                                        this.deleteInvoice(inv.invoiceId)
                                                    }}>Delete
                                                    </button>
                                                    <button className='btn--list-customer' onClick={(e) => {
                                                        this.viewInvoice(inv.invoiceId)
                                                    }}>View
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )

                            }
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        )
    }
}

export default ListInvoices