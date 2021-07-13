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
        this.backToUserList = this.backToUserList.bind(this);
    }

    componentDidMount() {
        AdminService.getAllRoles().then(res => {
            this.setState({roles: res.data})
            console.log(this.state.roles)
        })

    }
    backToUserList = (e)=>{
        e.preventDefault();
        this.props.history.push('/admin');
    }


    render() {
        return (
            <>
                <div className="main-container">
                    <div className="information-container">
                        <h2>Role List</h2>
                        <br/>
                        <div>
                            <Button className='btn'
                                    buttonStyle='btn--page'
                                    buttonSize='btn--medium'
                                    onClick={this.backToUserList}
                            >Back to User List
                            </Button>
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