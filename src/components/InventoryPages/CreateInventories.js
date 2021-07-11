import React,{Component} from 'react'
import InventoryService from "../../services/InventoryService";
import '../PageCSS/Create.css'
import {Button} from "../Button";

class CreateInventories extends Component{
    constructor(props) {
        super(props);
        this.state = {
            itemDescription : '',
            pricePerUnit : '',
            manufacturer : '',
            availableUnit : '',
        }
        this.changeAvailableUnitHandler = this.changeAvailableUnitHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeManufacturerHandler = this.changeManufacturerHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.cancel = this.cancel.bind(this);
        this.saveInventory = this.saveInventory.bind(this);
    }

    changeDescriptionHandler =(e) =>{
        this.setState ({itemDescription : e.target.value})
    }

    changePriceHandler =(e) =>{
        this.setState({pricePerUnit : e.target.value})
    }
    changeManufacturerHandler = (e) => {
        this.setState({manufacturer : e.target.value})
    }
    changeAvailableUnitHandler = (e) => {
        this.setState({availableUnit : e.target.value})
    }
    saveInventory = (e)=> {
        e.preventDefault()
        let inventory = {
            itemDescription: this.state.itemDescription,
            pricePerUnit: this.state.pricePerUnit,
            manufacturer: this.state.manufacturer,
            availableUnit: this.state.availableUnit,
        }
        InventoryService.createInventory(inventory).then(res=>{
            console.log(res.data);
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
                    <h2>Create Inventory</h2>
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
                                <label>Manufacturer</label>
                                <input placeholder="Manufactor" name="manufactor" className="form-control"
                                       value={this.state.manufacturer} onChange={this.changeManufacturerHandler}/>
                            </div>
                            <br />
                            <div className="form-element">
                                <label>Available Unit</label>
                                <input placeholder="Available Unit" name="availableUnit" className="form-control"
                                       value={this.state.availableUnit} onChange={this.changeAvailableUnitHandler}/>
                            </div>
                            <br />
                            <div className="form-element-button">
                                <Button className='btn'
                                        buttonStyle='btn--page'
                                        buttonSize='btn--medium'
                                        onClick={this.saveInventory}
                                >Save
                                </Button>
                                <Button className='btn'
                                        buttonStyle='btn--page'
                                        buttonSize='btn--medium'
                                        onClick={this.cancel} style={{marginLeft:"10px"}}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}
export default CreateInventories