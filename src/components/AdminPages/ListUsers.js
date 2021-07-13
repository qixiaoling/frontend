import React, {Component} from 'react'
import axios from "axios";
import AdminService from "../../services/AdminService";
import {Button} from "../Button";

class ListUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
        this.addRole = this.addRole.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    componentDidMount() {
            AdminService.getAllUsers().then((res)=>{
                console.log(res.data)
                this.setState({users : res.data})
            })
        }


    addRole(id) {
        this.props.history.push(`/admin/add-role/${id}`)
    }

    addUser() {
        this.props.history.push('/admin/add-user')
    }

    render() {
        return (
            <div className="main-container">
                <div className="information-container">
                    <h2>Application Users List</h2>
                    <div>
                        <Button
                            className='btn'
                            buttonStyle='btn--page'
                            buttonSize='btn--medium'
                            onClick={()=>this.addUser()}
                        >Add User
                        </Button>
                    </div>

                    <br/>
                    <table>
                        <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role(s)</th>
                        </tr>
                        </thead>
                        <tbody className="list-table">
                        {this.state.users.map((user) => {
                            const {user_id, userName, roles, email} = user;
                            return (
                                <tr key={user_id}>
                                    <td>{user_id}</td>
                                    <td>{userName}</td>
                                    <td>{email}</td>
                                    <td>{roles.length > 0 ? roles.length :
                                        <Button
                                            className='btn'
                                            buttonStyle='btn--page'
                                            buttonSize='btn--medium'
                                            onClick={() => this.addRole(user_id)}
                                        >Add Role</Button>}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }

}

export default ListUsers