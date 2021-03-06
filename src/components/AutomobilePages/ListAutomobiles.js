import React, {Component} from 'react'
import AutomobileService from "../../services/AutomobileService";
import'../PageCSS/List.css'
import {Button} from "../Button";


class ListAutomobiles extends Component{
    constructor(props) {
        super(props)
        this.state={
            automobiles: []
        }
        this.deleteAutomobile = this.deleteAutomobile.bind(this)
        this.editAutomobile = this.editAutomobile.bind(this)
        this.viewAutomobile = this.viewAutomobile.bind(this)
        this.addInspection = this.addInspection.bind(this)
    }
    componentDidMount(){
        AutomobileService.getAutomobiles().then((res) =>{
            console.log(res.data)
            this.setState({automobiles : res.data});

        })
    }

    deleteAutomobile(numberPlate){
        AutomobileService.deleteAutomobiles(numberPlate).then(res=>{
            this.setState({automobiles: this.state.automobiles.filter(auto => auto.numberPlate !== numberPlate)})
        })
    }
    editAutomobile(numberPlate){
       this.props.history.push(`/update-automobile/${numberPlate}`)

    }
    viewAutomobile(numberPlate){
        this.props.history.push(`/view-automobile/${numberPlate}`)
    }
    addInspection(numberPlate){
        this.props.history.push(`/add-inspection/${numberPlate}`)
    }


    render(){
        return(
            <div className="main-container">
                <div className="information-container">
                    <h2>Automobiles List</h2>
                    <br />
                    <div>
                        <table >
                            <thead>
                            <tr>
                                <th>Number Plate</th>
                                <th>Brand</th>
                                <th>Customer ID</th>
                                <th> Actions </th>
                            </tr>
                            </thead>
                            <tbody className="list-table">
                            {
                                this.state.automobiles.map(
                                    auto =>{
                                        console.log(auto)
                                        return(
                                            <tr key={auto.car. numberPlate}>
                                                <td>{auto.car. numberPlate}</td>
                                                <td>{auto.car. make}</td>
                                                <td>{auto.customerId}</td>
                                                <td>
                                                    <Button
                                                        className='btn'
                                                        buttonStyle='btn--page'
                                                        buttonSize='btn--medium'
                                                        onClick={()=>{this.editAutomobile(auto.car.numberPlate)}}
                                                    >Update
                                                    </Button>
                                                    <Button
                                                        className='btn'
                                                        buttonStyle='btn--page'
                                                        buttonSize='btn--medium'
                                                        onClick={()=>{this.deleteAutomobile(auto.car.numberPlate)}}
                                                    >Delete
                                                    </Button>
                                                    <Button
                                                        className='btn'
                                                        buttonStyle='btn--page'
                                                        buttonSize='btn--medium'
                                                        onClick={()=>{this.viewAutomobile(auto.car.numberPlate)}}
                                                    >View
                                                    </Button>
                                                    <Button
                                                        className='btn'
                                                        buttonStyle='btn--page'
                                                        buttonSize='btn--medium'
                                                        onClick={()=>{this.addInspection(auto.car.numberPlate)}}
                                                    >Add Inspection
                                                    </Button>
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

export default ListAutomobiles