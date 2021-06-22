import React, {Component} from 'react'
import {Button} from "../Button";
import '../PageCSS/Create.css'
import InvoiceService from "../../services/InvoiceService";



class UpdateInvoices extends Component {
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
        this.changeTotalPreTaxHandler = this.changeTotalPreTaxHandler.bind(this);
        this.changeTaxRateHandler = this.changeTaxRateHandler.bind(this);
        this.changeTotalFeeHandler = this.changeTotalFeeHandler.bind(this);
        this.changeInvoiceSentHandler = this.changeInvoiceSentHandler.bind(this);
        this.changeInvoicePaidHandler = this.changeInvoicePaidHandler.bind(this);
        this.updateInvoice = this.updateInvoice.bind(this);
        this.cancel = this.cancel.bind(this);

    }

    componentDidMount() {
        InvoiceService.getInvoiceById(this.state.id).then((res)=>{
            let invoice = res.data;
            this.setState({
                totalPreTax : invoice.totalPreTax,
                taxRate : invoice.taxRate,
                totalFee: invoice.totalFee,
                invoiceSent: invoice.invoiceSent,
                invoicePaid: invoice.invoicePaid,
        })
    })}

    changeTotalPreTaxHandler =(e) =>{
        this.setState({totalPreTax: e.target.value});
    }
    changeTaxRateHandler =(e) =>{
        this.setState({taxRate: e.target.value});
    }
    changeTotalFeeHandler =(e) =>{
        this.setState({totalFee: e.target.value});
    }
    changeInvoiceSentHandler =(e) =>{
        this.setState({invoiceSent: e.target.value});
    }
    changeInvoicePaidHandler =(e) =>{
        this.setState({invoicePaid: e.target.value});
    }
    updateInvoice = (e) =>{
        e.preventDefault();
        let invoice = {totalPreTax: this.state.totalPreTax, taxRate: this.state.taxRate,
            totalFee:this.state.totalFee, invoiceSent:this.state.invoiceSent, invoicePaid: this.state.invoicePaid};
        console.log('invoice =>' +JSON.stringify(invoice));
        InvoiceService.updateInvoiceById(invoice, this.state.id).then(res =>{
            this.props.history.push('/invoices');
        })

    }
    cancel(){
        this.props.history.push('/invoices');
    }

    render(){
        return(
            <div className="main-container-create-customer">
                <div className="information-container-create-customer">
                    <h2>Update Invoice</h2>
                    <div className="customer-card-body">
                        <form className="form-create-customer">
                            <div className="form-element">
                                <label>Total PreTax Amount: </label>
                                <input name="totalPreTax" className="form-control"
                                       value={this.state.totalPreTax} onChange={this.changeTotalPreTaxHandler}/>
                            </div>
                            <br />
                            <div className="form-element">
                                <label>Tax Rate: </label>
                                <input name="taxRate" className="form-control"
                                       value={this.state.taxRate} onChange={this.changeTaxRateHandler}/>
                            </div>
                            <br />
                            <div className="form-element">
                                <label>Total Amount: </label>
                                <input name="totalFee" className="form-control"
                                       value={this.state.totalFee} onChange={this.changeTotalFeeHandler}/>
                            </div>
                            <br />
                            <div className="form-element">
                                <label>Send Status: </label>
                                <input name="invoiceSent" className="form-control"
                                       value={this.state.invoiceSent} onChange={this.changeInvoiceSentHandler}/>
                            </div>
                            <br />
                            <div className="form-element">
                                <label>Pay Status: </label>
                                <input name="invoicePaid" className="form-control"
                                       value={this.state.invoicePaid} onChange={this.changeInvoicePaidHandler}/>
                            </div>
                            <br />
                            <div className="form-element-button">
                                <Button className='btn'
                                        buttonStyle='btn--page'
                                        buttonSize='btn--medium'
                                        onClick={this.updateInvoice}
                                >Update
                                </Button>
                                <Button className='btn'
                                        buttonStyle='btn--page'
                                        buttonSize='btn--medium'
                                        onClick={this.cancel.bind(this)}
                                        style={{marginLeft:"10px"}}
                                >Cancel
                                </Button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        )
    }
}
export default UpdateInvoices