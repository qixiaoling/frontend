import React, {Component} from 'react'
import axios from "axios";
import InvoiceService from "../../services/InvoiceService";
import '../CusotmerPages/ListCustomers.css'

const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJPbGFmIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlVTRVJfQkFDIn0seyJhdXRob3JpdHkiOiJVU0VSX0ZSTyJ9LHsiYXV0aG9yaXR5IjoiQURNSU4ifSx7ImF1dGhvcml0eSI6IlVTRVJfVFJFIn0seyJhdXRob3JpdHkiOiJVU0VSX1RFQyJ9XSwiaWF0IjoxNjE5NTkyMzg3LCJleHAiOjE2MjA3NzA0MDB9.mbEuNOQ4q8NQ7X0D316N8mea-MsJ90yV_MbNcOLGPjd9z0ur8JJtZ4i93BjyQ6zIsIkox2y9TKKpH1lT0c3eDQ'
const apiUrl = 'http://localhost:8080/customers';
axios.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${accessToken}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

class ListInvoices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invoices: [],
        }
        this.updateInvoice = this.updateInvoice.bind(this);
        this.viewInvoice = this.viewInvoice.bind(this);
        // this.deleteInvoice = this.deleteInvoice.bind(this);
    }

    componentDidMount() {
        InvoiceService.getInvoices().then((res) => {
            this.setState({invoices: res.data})

        })
    }

    updateInvoice(invoiceId) {
        this.props.history.push(`/update-invoice/${invoiceId}`)
    }

    viewInvoice(invoiceId) {
        this.props.history.push(`/view-invoice/${invoiceId}`)
    }

    // deleteInvoice(invoiceId) {
    //     InvoiceService.deleteInvoiceById(invoiceId).then((res) => {
    //         this.setState({invoices: this.state.invoices.filter(inv => inv.invoiceId !== invoiceId)})
    //     })
    // }

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
                                <th>Send Status</th>
                                <th>Pay Status</th>
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
                                                <td>{inv.invoiceSent}</td>
                                                <td>{inv.invoicePaid}</td>
                                                <td>
                                                    <button className='btn--list-customer' onClick={(e) => {
                                                        this.updateInvoice(inv.invoiceId)
                                                    }}>Update
                                                    </button>
                                                    <button className='btn--list-customer' >Delete
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