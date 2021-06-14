import React, {Component} from 'react'
import '../PageCSS/View.css'
import AutomobileService from "../../services/AutomobileService";




class ViewAutomobiles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            auto: {}
        }
    }
    componentDidMount() {
        AutomobileService.getAutomobilesById(this.state.id).then(res=>{
            this.setState({auto: res.data})
            console.log(this.state.auto)
        })

    }
    render(){
        return(
            <div className="main-container-view-customer">
                <div className="information-container-view-customer">
                    <h2>View Automobile Details</h2>
                    <div className="view-customer-card-body">
                        <div className="view-customer-element">
                            <label> Number Plate: </label>
                            <div>{this.state.auto.numberPlate}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Brand: </label>
                            <div>{this.state.auto.make}</div>
                        </div>
                        <div className="view-customer-element">
                            <label> Model: </label>
                            <div>{this.state.auto.model}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ViewAutomobiles