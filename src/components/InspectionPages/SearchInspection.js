import React, {Component} from 'react'
import InspectionService from "../../services/InspectionService";
import'../CusotmerPages/ListCustomers.css'
import InvoiceService from "../../services/InvoiceService";


class SearchInspection extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inspectionDate: '',
            inspectionResult: '',
            inspectionComplete: '',
            inspectionFee: '',
            agreeToRepair: '',
            repairDate: '',
            repairComplete: '',
            StatusAvailability: false,
            statusMsg: '',

        }
        this.editInspection = this.editInspection.bind(this);
        this.deleteInspection = this.deleteInspection.bind(this);
        this.viewInspection = this.viewInspection.bind(this);
        this.createInvoice = this.createInvoice.bind(this);
        this.checkStatus = this.checkStatus.bind(this);
    }
    editInspection() {
        console.log(this.props.searchInspection)

        this.props.history.push(`/update-inspection/${this.props.searchInspection}`)
    }

    deleteInspection(inspectionNumber) {
        InspectionService.deleteInspections(inspectionNumber).then(res => {
            this.setState({inspections: this.state.ins.filter(ins => this.props.searchInspection!= inspectionNumber)})
        })
    }

    viewInspection() {
        this.props.history.push(`/view-inspection/${this.props.searchInspection}`)
    }

    selectInventory() {
        this.props.history.push(`/list-inventory-for-inspection/${this.props.searchInspection}`)
    }

    createInvoice() {
        InvoiceService.createInvoice(this.props.searchInspection).then((res) => {
            console.log(JSON.stringify(res.data))
            this.props.history.push('/invoices');
        })

    }

    checkStatus() {
        InspectionService.checkInspectionStatus(this.props.searchInspection).then((res) => {
            this.setState({statusMsg: res.data})
            this.setState({StatusAvailability: true})
        })
    }

    componentDidMount() {
        InspectionService.getInspectionById(this.props.searchInspection).then(res =>{
            console.log(res.data);
            let inspection = res.data;
            this.setState({
                inspectionDate: inspection.inspectionDate,
                inspectionResult: inspection.inspectionResult,
                inspectionComplete: inspection.inspectionComplete,
                inspectionFee: inspection.inspectionFee,
                agreeToRepair: inspection.agreeToRepair,
                repairDate: inspection.repairDate,
                repairComplete: inspection.repairComplete,
            })

        })
    }


    render(){
        return(
            <div className="main-container-view-customer">
                <div className="information-container-view-customer">
                    <div className='button-container'>
                        <button className='btn--list-customer' onClick={() => {
                            this.editInspection()
                        }}>Update
                        </button>
                        <button className='btn--list-customer' onClick={() => {
                            this.deleteInspection()
                        }}>Delete
                        </button>
                        <button className='btn--list-customer' onClick={() => {
                            this.viewInspection()
                        }}>View
                        </button>
                        <button className='btn--list-customer' onClick={() => {
                            this.selectInventory()
                        }}>Select Inventory
                        </button>
                        <button className='btn--list-customer' onClick={() => {
                            this.createInvoice()
                        }}>Create Invoice
                        </button>
                        <button className='btn--list-customer' onClick={() => {
                            this.checkStatus()
                        }}>Check Status
                        </button>
                    </div>
                    {this.state.StatusAvailability && <p id='inspection-status'>{this.state.statusMsg}</p>}
                    <div className="view-customer-card-body">
                        <div className="view-customer-element">
                            <label>Inspection Date: </label>
                            <div>{this.state.inspectionDate}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Inspection Result: </label>
                            <div>{this.state.inspectionResult.toString()}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Inspection Complete: </label>
                            <div>{this.state.inspectionComplete.toString()}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Inspection Fee: </label>
                            <div>{this.state.inspectionFee}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Agree To Repair: </label>
                            <div>{this.state.agreeToRepair.toString()}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Repair Date: </label>
                            <div>{this.state.repairDate}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Repair Complete: </label>
                            <div>{this.state.repairComplete.toString()}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}
export default SearchInspection