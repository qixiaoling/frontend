import React, {Component} from 'react'
import CustomerService from "../../services/CustomerService";
import './CreateCustomers.css'
import axios from "axios";

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


class UpdateCustomers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.params.id,
            firstName: '',
            lastName: '',
            gender: '',
            email: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
    }

    componentDidMount() {
        CustomerService.getCustomerById(this.state.id).then((res)=>{
            console.log("I am a update")
            let customer = res.data;
            this.setState({
                firstName : customer.firstName,
                lastName: customer.lastName,
                gender : customer.gender,
                email : customer.email
            })
        })
    }

    changeFirstNameHandler =(e) =>{
        this.setState({firstName: e.target.value});
    }
    changeLastNameHandler =(e) =>{
        this.setState({lastName: e.target.value});
    }
    changeGenderHandler =(e) =>{
        this.setState({gender: e.target.value});
    }
    changeEmailHandler =(e) =>{
        this.setState({email: e.target.value});
    }
    updateCustomer = (e) =>{
        e.preventDefault();
        let customer = {firstName: this.state.firstName, lastName: this.state.lastName,
            gender:this.state.gender, email:this.state.email};
        console.log('customer =>' +JSON.stringify(customer));
        CustomerService.updateCustomer(customer, this.state.id).then(res =>{
            this.props.history.push('/customers');
        })

    }
    cancel(){
        this.props.history.push('/customers');
    }

    render(){
        return(
            <div className="main-container-create-customer">
                <div className="information-container-create-customer">
                    <h2>Update Customer</h2>
                    <div className="customer-card-body">
                        <form className="form-create-customer">
                            <div className="form-element">
                                <label>First Name: </label>
                                <input placeholder="First Name" name="firstName" className="form-control"
                                       value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                            </div>
                            <br />
                            <div className="form-element">
                                <label>Last Name: </label>
                                <input placeholder="Last Name" name="Last Name" className="form-control"
                                       value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                            </div>
                            <br />
                            <div className="form-element">
                                <label>gender: </label>
                                <input placeholder="gender" name="gender" className="form-control"
                                       value={this.state.gender} onChange={this.changeGenderHandler}/>
                            </div>
                            <br />
                            <div className="form-element">
                                <label>email: </label>
                                <input placeholder="email" name="email" className="form-control"
                                       value={this.state.email} onChange={this.changeEmailHandler}/>
                            </div>
                            <br />
                            <div className="form-element-button">
                                <button className='btn--create-customer' onClick={this.updateCustomer}>Update</button>
                                <button className='btn--create-customer' onClick={this.cancel.bind(this)}
                                        style={{marginLeft:"10px"}}>
                                    Cancel
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        )
    }
}
export default UpdateCustomers