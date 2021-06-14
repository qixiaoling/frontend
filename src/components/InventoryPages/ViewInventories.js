import React, {Component} from 'react'
import InventoryService from "../../services/InventoryService";
import '../PageCSS/ViewCustomer.css'

class ViewInventories extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            inventory:{}
        }
    }
    componentDidMount() {
        InventoryService.getInventoryById(this.state.id).then(res=>{
            this.setState({inventory: res.data})
        })
    }
    render(){
        return(
            <div className="main-container-view-customer">
                <div className="information-container-view-customer">
                    <h2>View Inventory Details</h2>
                    <div className="view-customer-card-body">
                        <div className="view-customer-element">
                            <label>Item Description: </label>
                            <div>{this.state.inventory.itemDescription}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Price: </label>
                            <div>{this.state.inventory.pricePerUnit}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Manufactor: </label>
                            <div>{this.state.inventory.manufactor}</div>
                        </div>
                        <div className="view-customer-element">
                            <label>Available Unit:  </label>
                            <div>{this.state.inventory.availableUnit}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default ViewInventories
