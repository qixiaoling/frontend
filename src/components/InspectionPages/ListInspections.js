import React, {Component} from 'react'
import InspectionService from "../../services/InspectionService";
import '../PageCSS/List.css'
import InvoiceService from "../../services/InvoiceService";
import {Button} from "../Button"
import convertDate from "../../helpers/convertDate";


class ListInspections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inspections: [],
            statusAvailability: false,
            statusMsg: '',
            searchInspection: '',
            searchInspectionError: '',

        }
        this.editInspection = this.editInspection.bind(this);
        this.deleteInspection = this.deleteInspection.bind(this);
        this.viewInspection = this.viewInspection.bind(this);
        this.createInvoice = this.createInvoice.bind(this);
        this.checkStatus = this.checkStatus.bind(this);
        this.handleSearchInspection = this.handleSearchInspection.bind(this);
        this.searchInspection = this.searchInspection.bind(this);
        this.closeStatus = this.closeStatus.bind(this);
    }

    componentDidMount() {
        InspectionService.getInspections().then(res => {
            console.log(res.data)
            this.setState({inspections: res.data})

        })

    }


    editInspection(inspectionNumber) {
        this.props.history.push(`/update-inspection/${inspectionNumber}`)
    }

    deleteInspection(inspectionNumber) {
        InspectionService.deleteInspections(inspectionNumber).then(res => {
            this.setState({inspections: this.state.inspections.filter(ins => ins.inspectionNumber != inspectionNumber)})
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
            this.setState({statusAvailability: true})
        })
    }

    searchInspection() {
        this.props.history.push(`/view-inspection/${this.state.searchInspection}`)
    }

    handleSearchInspection(e) {
        e.preventDefault();
        this.setState({searchInspection: e.target.value})
    }

    closeStatus() {
        this.setState({statusAvailability: false});
    }

    render() {
        return (
            <>
                <div className="main-container">
                    <div className="information-container">
                        <h2>Inspection List</h2>
                        <div className='alert alert-danger'>{this.state.searchInspectionError}</div>
                        <br/>
                        <div>
                            <input type='text' placeholder='Search Inspection'
                                   onChange={this.handleSearchInspection}/>
                            <Button className='btn'
                                    buttonStyle='btn--page'
                                    buttonSize='btn--medium'
                                    onClick={this.searchInspection}
                            >
                                Search
                            </Button>

                        </div>
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
                                <tbody className="list-table">
                                {
                                    this.state.inspections.map(
                                        ins => {
                                            console.log(ins)
                                            return (
                                                <tr key={ins.inspectionNumber}>
                                                    <td>{ins.inspectionNumber}</td>
                                                    <td>{convertDate(ins.inspectionDate)}</td>
                                                    <td>{ins.inspectionFee}</td>
                                                    <td>{convertDate(ins.repairDate)}</td>
                                                    <td>
                                                        <Button className='btn'
                                                                buttonStyle='btn--page'
                                                                buttonSize='btn--medium'
                                                                onClick={() => {
                                                                    this.editInspection(ins.inspectionNumber)
                                                                }}>
                                                            Update
                                                        </Button>
                                                        <Button className='btn'
                                                                buttonStyle='btn--page'
                                                                buttonSize='btn--medium'
                                                                onClick={() => {
                                                                    this.deleteInspection(ins.inspectionNumber)
                                                                }}>
                                                            Delete
                                                        </Button>
                                                        <Button className='btn'
                                                                buttonStyle='btn--page'
                                                                buttonSize='btn--medium'
                                                                onClick={() => {
                                                                    this.viewInspection(ins.inspectionNumber)
                                                                }}>
                                                            View
                                                        </Button>
                                                        <Button className='btn'
                                                                buttonStyle='btn--page'
                                                                buttonSize='btn--medium'
                                                                onClick={() => {
                                                                    this.selectInventory(ins.inspectionNumber)
                                                                }}>
                                                            Select Inventory
                                                        </Button>
                                                        <Button className='btn'
                                                                buttonStyle='btn--page'
                                                                buttonSize='btn--medium'
                                                                onClick={() => {
                                                                    this.createInvoice(ins.inspectionNumber)
                                                                }}>
                                                            Create Invoice
                                                        </Button>
                                                        <Button className='btn'
                                                                buttonStyle='btn--page'
                                                                buttonSize='btn--medium'
                                                                onClick={() => {
                                                                    this.checkStatus(ins.inspectionNumber)
                                                                }}>
                                                            Check Status
                                                        </Button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    )
                                }
                                </tbody>
                            </table>
                            {this.state.statusAvailability ?
                                <div className='status-container'>
                                    <p id='status-font'>
                                        { this.state.statusMsg }                                    </p>
                                    <Button className='btn'
                                            buttonStyle='btn--page'
                                            buttonSize='btn--medium'
                                            onClick={() => {
                                                this.closeStatus()
                                            }}>
                                        close
                                    </Button>
                                </div>
                                :
                                null}
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default ListInspections