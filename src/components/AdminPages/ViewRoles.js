import React, {Component} from 'react'
import '../PageCSS/View.css';
import AdminService from "../../services/AdminService";
import {Button} from "../Button";

class ViewRoles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: []
        }
    }

    componentDidMount() {
        AdminService.getAllRoles().then(res => {
            this.setState({roles: res.data})
            console.log(this.state.roles)
        })

    }

    render() {
        return (
            <>
                <div className="main-container">
                    <div className="information-container">
                        <h2>Role List</h2>
                        <br/>
                        <div>
                            <table>
                                <thead>
                                <tr>
                                    <th>Role ID</th>
                                    <th>Role Name</th>
                                </tr>
                                </thead>
                                <tbody className="list-table">
                                {
                                    this.state.roles.map(
                                        role => {
                                            console.log(role)
                                            return (
                                                <tr key={role.role_id}>
                                                    <td>{role.role_id}</td>
                                                    <td>{role.roleName}</td>
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
            </>
        )
    }
}

export default ViewRoles