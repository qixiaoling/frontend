import React, {Component} from 'react'
import AdminService from "../../services/AdminService";
import AddRoleResult from "./AddRoleResult";

class addRoles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            department: '',
            status: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.addRoles = this.addRoles.bind(this);
    }

    handleChange = (e) => {

        this.setState({department: e.target.value})
    }

    addRoles(e) {
        e.preventDefault();
        let roles = [
            {roleName: this.state.department}
        ]
        console.log('roles=>' + JSON.stringify(roles))
        AdminService.addRoleToUser(roles, this.state.id).then((res) => {
            this.setState({status: res.status})
        })
    }


    render() {
        return (
            <>
                {this.state.status ? <AddRoleResult status={this.state.status} history={this.props.history}/>
                    :
                    <div className='main-container-create-customer'>
                        <div className='information-container-create-customer'>
                            <h2>Add Role(s)</h2>
                            <div className='customer-card-body'>
                                <form className='form-create-customer'>
                                    <div className='form-element'>
                                        <label htmlFor='department'>Choose the department
                                            <select
                                                id='department'
                                                value={this.state.department}
                                                onChange={this.handleChange}
                                            >
                                                <option value='USER_BAC'>Back Office</option>
                                                <option value='USER_FRO'>Front Office</option>
                                                <option value='USER_TEC'>Technical Department</option>
                                                <option value='USER_TRE'>Treasury Department</option>
                                                <option value='ADMIN'>Administrator</option>
                                            </select>
                                        </label>

                                    </div>

                                    <button type='submit' className='btn--create-customer'
                                            onClick={this.addRoles}>
                                        Add Role(s)
                                    </button>

                                </form>

                            </div>
                        </div>

                    </div>
                }
            </>

        )
    }

}

export default addRoles

