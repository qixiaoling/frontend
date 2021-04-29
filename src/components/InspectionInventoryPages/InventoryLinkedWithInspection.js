import React, {Component} from 'react'
import InspectionService from "../../services/InspectionService";
class InventoryLinkedWithInspection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idOne : this.props.match.params.idOne,
            idTwo : this.props.match.params.idTwo,
            invLinkedInspection: {}
        }
    }

    componentDidMount() {
        InspectionService.getInspectionById(this.state.idOne).then(res=>{
            console.log(res.data)
        })
    }
    render(){
        return(
            <div className="main-container">
                <div className="information-container">
                    <h2>Inventory Linked with Inspection</h2>
                    <br />
                    <div>
                        <table >
                            <thead>
                            <tr>
                                <th>Inspection Number</th>
                                <th>Inventory Item ID</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{this.state.idOne}</td>
                                <td>{this.state.idTwo}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default InventoryLinkedWithInspection