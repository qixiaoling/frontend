import React, {Component} from 'react'
import '../PageCSS/Create.css'
import {Button} from "../Button";
import AdminService from "../../services/AdminService";

class UpdateUsers extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            userName: '',
            password:'',
            email: '',
        }
        this.update = this.update.bind(this)
        this.cancel = this.cancel.bind(this)


    }
    changeUserNameHandler=(e)=>{
        e.preventDefault();
        this.setState({userName : e.target.value})
    }
    changePasswordHandler=(e)=>{
        e.preventDefault();
        this.setState({password: e.target.value})
    }
    changeEmailHandler=(e)=>{
        e.preventDefault();
        this.setState({email : e.target.value})
    }
    update = (e)=>{
        e.preventDefault();
        let newAppUser = {
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email
        }
        console.log('newUser=>'+ JSON.stringify(newAppUser))
        AdminService.updateUser(newAppUser, this.state.id).then(res=>{
            this.props.history.push('/admin')
        })
    }
    cancel(){
        this.props.history.push('/admin')
    }
    render(){
        return(
            <>
                <div className="main-container-create-customer">
                    <div className="information-container-create-customer-smaller">
                        <h2>Update Application User</h2>
                        <div className="customer-card-body">
                            <form className="form-create-customer">
                                <div className="form-element">
                                    <label>User Name: </label>
                                    <input placeholder="user name" name="userName" className="form-control"
                                           value={this.state.userName} onChange={this.changeUserNameHandler}/>
                                </div>
                                <br/>
                                <div className="form-element">
                                    <label>Password: </label>
                                    <input placeholder="password" name="password" className="form-control"
                                           value={this.state.password} onChange={this.changePasswordHandler}/>
                                </div>
                                <div className="form-element">
                                    <label>Email: </label>
                                    <input placeholder="email" name="email" className="form-control"
                                           value={this.state.email} onChange={this.changeEmailHandler}/>
                                </div>
                                <br />
                                <div className="form-element-button">
                                    <Button
                                        className='btn'
                                        buttonStyle='btn--page'
                                        buttonSize='btn--medium'
                                        onClick={this.update}
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

            </>
        )
    }
}
export default UpdateUsers