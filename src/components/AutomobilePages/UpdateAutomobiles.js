import React, {Component} from 'react'
import AutomobileService from "../../services/AutomobileService";
import '../PageCSS/Create.css'
import {Button} from "../Button";


class UpdateAutomobiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            numberPlate: this.props.match.params.id,
            make: '',
            model: '',
        }
        this.changeNumberPlateHandler = this.changeNumberPlateHandler.bind(this)
        this.changeBrandHandler = this.changeBrandHandler.bind(this)
        this.changeModelHandler = this.changeModelHandler.bind(this)
        this.changeCustomerIdHandler = this.changeCustomerIdHandler.bind(this)
        this.updateAutomobiles = this.updateAutomobiles.bind(this)
        this.cancel = this.cancel.bind(this)
    }

    componentDidMount() {
        AutomobileService.getAutomobilesById(this.state.id).then((res)=>{
            console.log("I update car info.")
            let auto = res.data;
            this.setState({
                    numberPlate: auto.numberPlate,
                    make: auto.make,
                    model: auto.model,
                }
            )
        })
    }


    changeNumberPlateHandler = (e) => {
        this.setState({numberPlate:e.target.value})
    }
    changeBrandHandler = (e) => {
        this.setState({make:e.target.value})
    }
    changeModelHandler = (e) => {
        this.setState({model : e.target.value})
    }
    changeCustomerIdHandler = (e) => {
        this.setState({customerId : e.target.value})
    }
    updateAutomobiles = (e) =>{
        e.preventDefault();
        let auto={numberPlate: this.state.numberPlate, make: this.state.make, model: this.state.model}
        console.log('auto=>'+ JSON.stringify(auto))
        AutomobileService.updateAutomobiles(auto, this.state.id).then(res=>{
            this.props.history.push('/automobiles')
        })
    }

    cancel(){
        this.props.history.push('/automobiles')
    }

    render(){
        return(
            <div className="main-container-create-customer">
                <div className="information-container-create-customer">
                    <h2>Update Automobile</h2>
                    <div className="customer-card-body">
                        <form className="form-create-customer">
                            <div className="form-element">
                                <label>Number Plate: </label>
                                <input placeholder="Number Plate" name="NumberPlate" className="form-control"
                                       value={this.state.numberPlate} onChange={this.changeNumberPlateHandler}/>
                            </div>
                            <br />
                            <div className="form-element">
                                <label>Brand: </label>
                                <input placeholder="Brand" name="Brand" className="form-control"
                                       value={this.state.make} onChange={this.changeBrandHandler}/>
                            </div>
                            <br />
                            <div className="form-element">
                                <label>Model: </label>
                                <input placeholder="Model" name="Model" className="form-control"
                                       value={this.state.model} onChange={this.changeModelHandler}/>
                            </div>
                            <br />
                            <div className="form-element-button">
                                <Button
                                    className='btn'
                                    buttonStyle='btn--page'
                                    buttonSize='btn--medium'
                                    onClick={this.updateAutomobiles}
                                >Save
                                </Button>
                                <Button
                                    className='btn'
                                    buttonStyle='btn--page'
                                    buttonSize='btn--medium'
                                    onClick={this.cancel.bind(this)}
                                        style={{marginLeft:"10px"}}
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
export default UpdateAutomobiles