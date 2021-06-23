import React, {Component} from 'react'
import InspectionInventoryService from "../../services/InspectionInventoryService";
import InventoryLinkedWithInspectionResult from "./InventoryLinkedWithInspectionResult";
import {Button} from "../Button";

class InventoryLinkedWithInspection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idOne: this.props.match.params.idOne,
            idTwo: this.props.match.params.idTwo,
            inventoryQuantities: '',
            status: '',

        }
        this.changeInventoryQuantityHandler = this.changeInventoryQuantityHandler.bind(this);
        this.addQuantity = this.addQuantity.bind(this);
    }


    changeInventoryQuantityHandler = (e) => {
        this.setState({inventoryQuantities: e.target.value})
    }

    addQuantity = (e) => {
        e.preventDefault();
        let inspectionInventory = {inventoryQuantities: this.state.inventoryQuantities};
        console.log(JSON.stringify(inspectionInventory));
        InspectionInventoryService.addQuantity(this.state.idOne, this.state.idTwo, inspectionInventory,).then(res => {
            console.log(res.status)
            this.setState({status: res.status})

        })
    }

    render() {
        return (
            <>
                {this.state.status === 200 ? <InventoryLinkedWithInspectionResult status={this.state.status} history={this.props.history}/> :
                    <div className="main-container">
                        <div className="information-container">
                            <h2>Inventory Linked with Inspection</h2>
                            <br/>
                            <div>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Inspection Number</th>
                                        <th>Inventory Item ID</th>
                                        <th><label>Add Quantity</label></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{this.state.idOne}</td>
                                        <td>{this.state.idTwo}</td>
                                        <td><input placeholder="0" name="inventoryQuantity"
                                                   value={this.state.inventoryQuantities}
                                                   onChange={this.changeInventoryQuantityHandler}/>
                                            <Button
                                                className='btn'
                                                buttonStyle='btn--page'
                                                buttonSize='btn--medium'
                                                onClick={this.addQuantity}
                                            >Add
                                                Quantity
                                            </Button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                }
            </>

        )
    }

}

export default InventoryLinkedWithInspection