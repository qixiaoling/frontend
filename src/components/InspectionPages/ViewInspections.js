import React, {Component} from 'react'
import InspectionService from "../../services/InspectionService";
import'../PageCSS/ListCustomers.css'


class ViewInspections extends Component{
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
            repairComplete: '',

        }
    }

    componentDidMount() {
        InspectionService.getInspectionById(this.state.id).then(res =>{
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
                    <h2>View Inspection Details</h2>
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
export default ViewInspections