import React, {Component} from 'react'
import InspectionService from "../../services/InspectionService";
import'../CusotmerPages/ListCustomers.css'


class UpdateInspections extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            inspectionDate: '',
            inspectionResult: '',
            inspectionComplete: '',
            inspectionFee: '',
            agreeToRepair: '',
            repairDate: '',
            repairComplete: ''

        }
        this.changeRepairDateHandler = this.changeRepairDateHandler.bind(this);
        this.changeRepairCompleteHandler = this.changeRepairCompleteHandler.bind(this);
        this.changeInspectionFeeHandler = this.changeInspectionFeeHandler.bind(this);
        this.changeInspectionCompleteHandler = this.changeInspectionCompleteHandler.bind(this);
        this.changeInspectionResultHandler = this.changeInspectionResultHandler.bind(this);
        this.changeAgreeToRepairHandler = this.changeAgreeToRepairHandler.bind(this);
        this.changeInspectionDateHandler = this.changeInspectionDateHandler.bind(this);
        this.updateInspection = this.updateInspection.bind(this);
        this.cancel = this.cancel.bind(this);
    }


    componentDidMount() {
        InspectionService.getInspectionById(this.state.id).then(res =>{
            console.log(res.data)
            let ins = res.data;
            this.setState({
                inspectionDate: ins.inspectionDate,
                inspectionResult: ins.inspectionResult,
                inspectionComplete: ins.inspectionComplete,
                inspectionFee: ins.inspectionFee,
                agreeToRepair: ins.agreeToRepair,
                repairDate: ins.repairDate,
                repairComplete: ins.repairComplete,
            })

        })
    }

    changeInspectionDateHandler = (e) =>{
        this.setState({inspectionDate : e.target.value})
    }
    changeInspectionResultHandler = (e) =>{
        this.setState({inspectionResult : e.target.value})
    }
    changeInspectionCompleteHandler = (e) => {
        this.setState({inspectionComplete: e.target.value})
    }
    changeInspectionFeeHandler = (e) => {
        this.setState({inspectionFee : e.target.value})
    }
    changeAgreeToRepairHandler = (e) => {
        this.setState({agreeToRepair : e.target.value})
    }
    changeRepairDateHandler = (e) => {
        this.setState({repairDate : e.target.value})
    }
    changeRepairCompleteHandler = (e) => {
        this.setState({repairComplete : e.target.value})
    }
    updateInspection = (e) => {
        e.preventDefault();
        let inspection = {
            inspectionDate : this.state.inspectionDate,
            inspectionResult:  this.state.inspectionResult,
            inspectionComplete: this.state.inspectionComplete,
            inspectionFee: this.state.inspectionFee,
            agreeToRepair: this.state.agreeToRepair,
            repairDate: this.state.repairDate,
            repairComplete: this.state.repairComplete,
        }
        console.log('inspection => '+ JSON.stringify(inspection));
        InspectionService.updateInspections(inspection, this.state.id).then(res =>{
            this.props.history.push('/inspections')
        })
    }
    cancel(){
        this.props.history.push('inspections')
    }

    render(){
        return(
            <div className="main-container-create-customer">
                <div className="information-container-create-customer">
                    <h2>Update Inspection</h2>
                    <div className="customer-card-body">
                        <form className="form-create-customer">
                            <div className="form-element">
                                <label>Inspection Date</label>
                                <input placeholder="Inspection Date" name="inspectionDate" className="form-control"
                                       value={this.state.inspectionDate} onChange={this.changeInspectionDateHandler} />
                            </div>
                            <br/>
                            <div className="form-element">
                                <label>Inspection Result</label>
                                <input placeholder="Inspection Result" name="inspectionResult" className="form-control"
                                       value={this.state.inspectionResult} onChange={this.changeInspectionResultHandler} />
                            </div>
                            <br/>
                            <div className="form-element">
                                <label>Inspection Complete</label>
                                <input placeholder="Inspection Complete" name="inspectionComplete" className="form-control"
                                       value={this.state.inspectionComplete} onChange={this.changeInspectionCompleteHandler} />
                            </div>
                            <br/>
                            <div className="form-element">
                                <label>Inspection Fee</label>
                                <input placeholder="Inspection Fee" name="inspectionFee" className="form-control"
                                       value={this.state.inspectionFee} onChange={this.changeInspectionFeeHandler} />
                            </div>
                            <br/>
                            <div className="form-element">
                                <label>Agree To Repair</label>
                                <input placeholder="Agree To Repair" name="agreeToRepair" className="form-control"
                                       value={this.state.agreeToRepair} onChange={this.changeAgreeToRepairHandler} />
                            </div>
                            <br/>
                            <div className="form-element">
                                <label>Repair Date</label>
                                <input placeholder="Repair Date" name="repairDate" className="form-control"
                                       value={this.state.repairDate} onChange={this.changeRepairDateHandler} />
                            </div>
                            <br/>
                            <div className="form-element">
                                <label>Repair Complete</label>
                                <input placeholder="Repair Complete" name="repairComplete" className="form-control"
                                       value={this.state.repairComplete} onChange={this.changeRepairCompleteHandler} />
                            </div>
                            <br/>
                            <div className="form-element-button">
                                <button className='btn--create-customer' onClick={this.updateInspection}>Save</button>
                                <button className='btn--create-customer' onClick={this.cancel.bind(this)}
                                        style={{marginLeft:"10px"}}>
                                    Cancel
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        )
    }



}
export default UpdateInspections