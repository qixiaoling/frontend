import React, {Component} from 'react'
import '../CusotmerPages/CreateCustomers'
import InventoryService from "../../services/InventoryService";

class UpdateInventories extends Component{
    constructor(props) {
        super(props);
        this.state={
            id: this.props.match.params.id,
            itemDescription: '',
            pricePerUnit: '',
            manufactor: '',
            availableUnit:　''
        }
        this.changeAvailableUnitHandler = this.changeAvailableUnitHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeManufactorHandler = this.changeManufactorHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.cancel = this.cancel.bind(this);
        this.updateInventory = this.updateInventory.bind(this);
    }
    componentDidMount() {
        InventoryService.getInventoryById(this.state.id).then(res=>{
            console.log(res.data)
            this.setState({
                itemDescription : res.data.itemDescription,
                pricePerUnit : res.data.pricePerUnit,
                manufactor : res.data.manufactor,
                availableUnit : res.data.availableUnit,

            })
        })
    }
    changeDescriptionHandler =(e) =>{
        this.setState ({itemDescription : e.target.value})
    }

    changePriceHandler =(e) =>{
        this.setState({pricePerUnit : e.target.value})
    }
    changeManufactorHandler = (e) => {
        this.setState({manufactor : e.target.value})
    }
    changeAvailableUnitHandler = (e) => {
        this.setState({availableUnit : e.target.value})
    }
    updateInventory = (e) =>{
        e.preventDefault();
        let inventory = {
            itemDescription : this.state.itemDescription,
            pricePerUnit : this.state.pricePerUnit,
            manufactor : this.state.manufactor,
            availableUnit : this.state.availableUnit,
        }
        console.log('inventory=> '+ JSON.stringify(inventory))
        InventoryService.updateInventory(inventory, this.state.id).then(res=>{
            this.props.history.push('/inventories')
        })
    }
    cancel(){
        this.props.history.push('/inventories')
    }
    render(){
        return(
            <div className="main-container-create-customer">
                <div className="information-container-create-customer">
                    <h2>Update Inventory</h2>
                    <div className="customer-card-body">
                        <form className="form-create-customer">
                            <div className="form-element">
                                <label>Item Description</label>
                                <input placeholder="Item Description" name="itemDescription" className="form-control"
                                       value={this.state.itemDescription} onChange={this.changeDescriptionHandler}/>
                            </div>
                            <br />
                            <div className="form-element">
                                <label>Price</label>
                                <input placeholder="Price" name="price" className="form-control"
                                       value={this.state.pricePerUnit} onChange={this.changePriceHandler}/>
                            </div>
                            <br />
                            <div className="form-element">
                                <label>Manufactor</label>
                                <input placeholder="Manufactor" name="manufactor" className="form-control"
                                       value={this.state.manufactor} onChange={this.changeManufactorHandler}/>
                            </div>
                            <br />
                            <div className="form-element">
                                <label>Available Unit</label>
                                <input placeholder="Available Unit" name="availableUnit" className="form-control"
                                       value={this.state.availableUnit} onChange={this.changeAvailableUnitHandler}/>
                            </div>
                            <br />
                            <div className="form-element-button">
                                <button className='btn--list-customer' onClick={this.updateInventory}>Save</button>
                                <button className='btn--list-customer' onClick={this.cancel} style={{marginLeft:"10px"}}>
                                    Cancel</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }


}
export default UpdateInventories