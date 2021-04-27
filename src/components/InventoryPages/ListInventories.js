import React, {Component} from 'react'
import InventoryService from "../../services/InventoryService";
import '../Button.css'
import axios from "axios";
import '../CusotmerPages/ListCustomers.css'

const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJPbGFmIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IkFETUlOIn0seyJhdXRob3JpdHkiOiJVU0VSX1RSRSJ9LHsiYXV0aG9yaXR5IjoiVVNFUl9GUk8ifSx7ImF1dGhvcml0eSI6IlVTRVJfVEVDIn0seyJhdXRob3JpdHkiOiJVU0VSX0JBQyJ9XSwiaWF0IjoxNjE4MzkxNjIwLCJleHAiOjE2MTk1NjA4MDB9.dtSmT_MCQw8Z2OtVv8f_Yag8b_vsTflMkZdZ3M_NrcgtjtedGJaS77nFWTMcCx5ZvzB1n9AnNpcixOCDOIsYew'
const apiUrl = 'http://localhost:8080/customers';
axios.interceptors.request.use(
    config=> {
        config.headers.authorization = `Bearer ${accessToken}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)



class ListInventories extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inventories: []
        }
        this.addInventory = this.addInventory.bind(this);
        this.editInventory = this.editInventory.bind(this);
        this.deleteInventory = this.deleteInventory.bind(this);
        this.viewInventory = this.viewInventory.bind(this);
    }
    componentDidMount() {
        InventoryService.getInventories().then(res =>{
            console.log(res);
            this.setState({inventories: res.data})
            console.log("I am a new listInventories")
        })
    }

    addInventory(){
        this.props.history.push('/add-inventory')
    }

    editInventory(itemId){
        this.props.history.push(`/update-inventory/${itemId}`)
    }

    deleteInventory(itemId){
        InventoryService.deleteInventory(itemId).then(res=>{
            this.setState({inventories: this.state.inventories.filter(inv => inv.itemid !== itemId) })
        })
    }

    viewInventory(itemId){
        this.props.history.push(`/view-inventory/${itemId}`)
    }

    render(){
        return(
            <div className="main-container">
                <div className="information-container">
                    <h2>List Inventories</h2>
                    <div>
                        <button className='btn--list-customer' onClick={this.addInventory}>Add Inventory</button>
                    </div>
                    <br />
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
                                    inv =>{
                                        return(
                                            <tr key={inv.itemId}>
                                                <td>{inv.itemId}</td>
                                                <td>{inv.itemDescription}</td>
                                                <td>{inv.availableUnit}</td>
                                                <td>
                                                    <button className='btn--list-customer' onClick={()=>{this.editInventory(inv.itemId)}}>Update</button>
                                                    <button className='btn--list-customer' onClick={()=>{this.deleteInventory(inv.itemId)}}>Delete</button>
                                                    <button className='btn--list-customer' onClick={()=>{this.viewInventory(inv.itemId)}}>View</button>
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
export default ListInventories