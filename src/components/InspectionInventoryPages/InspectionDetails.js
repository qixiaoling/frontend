import React, {Component} from 'react'
import '../PageCSS/List.css'
import {Button} from "../Button"
import InspectionInventoryService from "../../services/InspectionInventoryService";


class InspectionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inspectionDetailsList: [],

        }

    }

    componentDidMount() {
        InspectionInventoryService.getAll().then(res => {
            this.setState({inspectionDetailsList: res.data})
            console.log(this.state.inspectionDetailsList)
        })

    }


    render() {
        return (
            <>
                <div className="main-container">
                    <div className="information-container">
                        <h2>Inspection Details</h2>
                        <br/>
                        <div>
                            <table>
                                <thead>
                                <tr>
                                    <th>Inspection Number</th>
                                    <th>Inventory ItemID</th>
                                    <th>Inventory Item</th>
                                    <th>Quantity</th>
                                </tr>
                                </thead>
                                <tbody className="list-table">
                                {
                                    this.state.inspectionDetailsList.map(
                                        ins => {
                                            return (
                                                <tr key={ins.id}>
                                                    <td>{ins.inspection.inspectionNumber}</td>
                                                    <td>{ins.inventory.itemId}</td>
                                                    <td>{ins.inventory.itemDescription}</td>
                                                    <td>{ins.inventoryQuantities}</td>
                                                </tr>
                                            )
                                        }
                                    )
                                    }
                                    </tbody>
                                    </table>
                                    </div>
                                    </div>
                                    </div>

                                    </>
                                    )
                                }
                                }

    export
    default
    InspectionDetails