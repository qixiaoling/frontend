import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from "axios";

function ListUsers() {
    const [users, setUsers] = useState([])
    const history = useHistory()


    async function getUsers() {
        try {
            const result = await axios.get("http://localhost:8080/securityManagement/appusers");
            console.log(result.data)
            setUsers(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    function addRole(id) {
        history.push(`/admin/add-role/${id}`)
    }

    function addUser() {
        history.push('/admin/add-user')
    }

    return (
        <div className="main-container">
            <div className="information-container">
                <h2>Application Users List</h2>
                <div>
                    <button className='btn--list-customer' onClick={addUser}>Add User</button>
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
                    {users.map((user) => {
                        const {user_id, userName, roles, email} = user;
                        return (
                            <tr key={user_id}>
                                <td>{user_id}</td>
                                <td>{userName}</td>
                                <td>{email}</td>
                                <td>{roles.length > 0 ? roles.length :
                                    <button
                                        className='btn--list-customer'
                                        onClick={() => addRole(user_id)}
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

export default ListUsers