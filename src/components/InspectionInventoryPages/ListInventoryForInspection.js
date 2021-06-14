import React, {Component} from 'react'
import InventoryService from "../../services/InventoryService";
import '../CusotmerPages/ListCustomers.css'
import InspectionInventoryService from "../../services/InspectionInventoryService";


class ListInventoryForInspection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            inventories: []
        }
        this.selectInventory = this.selectInventory.bind(this)
    }

    componentDidMount() {
        InventoryService.getInventories().then(res => {
            console.log(res.data)
            this.setState({inventories: res.data})
        })
    }

    selectInventory(itemId){
        let selectedInventory = {};
        InventoryService.getInventoryById(itemId).then(res=>{
            selectedInventory = res.data;
            InspectionInventoryService.selectInventory(this.state.id, selectedInventory).then(res=>{
                        this.props.history.push(`/list-inventory-for-inspection/${this.state.id}/${itemId}`)
                })
        })


    }

    render() {
        return (
            <div className="main-container">
                <div className="information-container">
                    <h2>Select Below Inventory</h2>
                    <br/>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th>Item Id</th>
                                <th>Description</th>
                                <th>Available Unit</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.inventories.map(
                                    inv => {
                                        return (
                                            <tr key={inv.itemId}>
                                                <td>{inv.itemId}</td>
                                                <td>{inv.itemDescription}</td>
                                                <td>{inv.availableUnit}</td>
                                                <td>
                                                    <button className='btn--list-customer' onClick={() => {
                                                        this.selectInventory(inv.itemId)
                                                    }}>Select
                                                    </button>
                                                </td>
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
        )
    }
}

export default ListInventoryForInspection