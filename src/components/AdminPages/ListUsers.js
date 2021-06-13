import React, {Component} from 'react'
import axios from "axios";
import AdminService from "../../services/AdminService";

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
        this.props.history.push(`/admin/add-role/${this.state.user_id}`)
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
                        <button className='btn--list-customer' onClick={()=>this.addUser()}>Add User</button>
                    </div>

                    <br/>
                    <tabel>
                        <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role(s)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map((user) => {
                            const {user_id, userName, roles, email} = user;
                            return (
                                <tr key={user_id}>
                                    <td>{user_id}</td>
                                    <td>{userName}</td>
                                    <td>{email}</td>
                                    <td>{roles.length > 0 ? roles.length :
                                        <button
                                            className='btn--list-customer'
                                            onClick={() => this.state.addRole(user_id)}
                                        >Add Role</button>}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </tabel>

                </div>
            </div>

        )
    }

}

export default ListUsers