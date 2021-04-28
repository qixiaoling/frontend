import React, {Component} from 'react'
import InspectionService from "../../services/InspectionService";
import'../CusotmerPages/ListCustomers.css'


class ViewInspections extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            inspection:{},

        }
    }

    componentDidMount() {
        InspectionService.getInspectionById(this.state.id).then(res =>{
            console.log(res.data);
            this.setState({
                inspection: res.data
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
                            <label>Inspection Date</label>
                            <div>{this.state.inspection.inspectionDate}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Inspection Result</label>
                            <div>{this.state.inspection.inspectionResult}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Inspection Complete</label>
                            <div>{this.state.inspection.inspectionComplete}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Inspection Fee</label>
                            <div>{this.state.inspection.inspectionFee}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Agree To Repair</label>
                            <div>{this.state.inspection.agreeToRepair}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Repair Date</label>
                            <div>{this.state.inspection.repairDate}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Repair Complete</label>
                            <div>{this.state.inspection.repairComplete}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}
export default ViewInspections