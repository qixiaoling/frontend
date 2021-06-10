import React, {Component} from 'react'
import InspectionService from "../../services/InspectionService";
import '../CusotmerPages/ListCustomers.css'
import InvoiceService from "../../services/InvoiceService";



class ListInspections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inspections: [],
            StatusAvailability: false,
            statusMsg: '',
            searchInspection: '',
            searchInspectionError: '',
            foundInspection: false,
            foundInspectionObject : {},
        }
        this.editInspection = this.editInspection.bind(this);
        this.deleteInspection = this.deleteInspection.bind(this);
        this.viewInspection = this.viewInspection.bind(this);
        this.createInvoice = this.createInvoice.bind(this);
        this.checkStatus = this.checkStatus.bind(this);
        this.handleSearchInspection = this.handleSearchInspection.bind(this);
        this.searchInspection = this.searchInspection.bind(this)
    }

    componentDidMount() {
        InspectionService.getInspections().then(res => {
            console.log(res.data)
            this.setState({inspections: res.data})
            console.log("I am a listed inspection object.")
        })

    }

    editInspection(inspectionNumber) {
        this.props.history.push(`/update-inspection/${inspectionNumber}`)
    }

    deleteInspection(inspectionNumber) {
        InspectionService.deleteInspections(inspectionNumber).then(res => {
            this.setState({inspections: this.state.ins.filter(ins => ins.inspectionNumber != inspectionNumber)})
        })
    }

    viewInspection(inspectionNumber) {
        this.props.history.push(`/view-inspection/${inspectionNumber}`)
    }

    selectInventory(inspectionNumber) {
        this.props.history.push(`/list-inventory-for-inspection/${inspectionNumber}`)
    }

    createInvoice(inspectionNumber) {
        InvoiceService.createInvoice(inspectionNumber).then((res) => {
            console.log(JSON.stringify(res.data))
            this.props.history.push('/invoices');
        })

    }

    checkStatus(inspectionNumber) {
        InspectionService.checkInspectionStatus(inspectionNumber).then((res) => {
            this.setState({statusMsg: res.data})
            this.setState({StatusAvailability: true})
        })
    }

    searchInspection() {
        if (this.state.inspections.length > 0) {
            this.setState({foundInspectionObject  : this.state.inspections.find((ins)=> ins. inspectionNumber === parseInt(this.state.searchInspection))})
            this.setState({foundInspection: true})
            console.log('I just found the inspection :'+ this.state.foundInspectionObject)
            console.log(JSON.stringify(this.state.foundInspectionObject))
        } else {
            this.setState({searchInspectionError: 'There are no inspections.'})
        }
    }

    handleSearchInspection(e) {
        e.preventDefault();
        this.setState({searchInspection: e.target.value})


    }

    render() {
        return (
            <div className="main-container">
                <div className="information-container">
                    <h2>Inspection List</h2>
                    <div className='alert alert-danger'>{this.state.searchInspectionError}</div>
                    <br/>
                    <div>
                        <input type='text' placeholder='Search Inspection' onChange={this.handleSearchInspection}/>
                        <button className='btn--list-customer' onClick={this.searchInspection}>Search</button>

                    </div>


                    <br/>
                    <br/>

                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th>Inspection Number</th>
                                <th>inspection Date</th>
                                <th>Fee</th>
                                <th>Repair Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.inspections.map(
                                    ins => {
                                        console.log(ins)
                                        return (
                                            <tr key={ins.inspectionNumber}>
                                                <td>{ins.inspectionNumber}</td>
                                                <td>{ins.inspectionDate}</td>
                                                <td>{ins.inspectionFee}</td>
                                                <td>{ins.repairDate}</td>
                                                <td>
                                                    <button className='btn--list-customer' onClick={() => {
                                                        this.editInspection(ins.inspectionNumber)
                                                    }}>Update
                                                    </button>
                                                    <button className='btn--list-customer' onClick={() => {
                                                        this.deleteInspection(ins.inspectionNumber)
                                                    }}>Delete
                                                    </button>
                                                    <button className='btn--list-customer' onClick={() => {
                                                        this.viewInspection(ins.inspectionNumber)
                                                    }}>View
                                                    </button>
                                                    <button className='btn--list-customer' onClick={() => {
                                                        this.selectInventory(ins.inspectionNumber)
                                                    }}>Select Inventory
                                                    </button>
                                                    <button className='btn--list-customer' onClick={() => {
                                                        this.createInvoice(ins.inspectionNumber)
                                                    }}>Create Invoice
                                                    </button>
                                                    <button className='btn--list-customer' onClick={() => {
                                                        this.checkStatus(ins.inspectionNumber)
                                                    }}>Check Status
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                            {this.state.StatusAvailability && <p id='inspection-status'>{this.state.statusMsg}</p>}
                            </tbody>
                        </table>
                    </div>


                </div>


            </div>
        )
    }


}

export default ListInspections