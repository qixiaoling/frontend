import React, {useState, useEffect} from 'react'
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom'
import axios from "axios";
import '../CusotmerPages/CreateCustomers.css'

function UserResetPassword_Function() {
    const [users, setUsers] = useState([])
    const {register, handleSubmit} = useForm()
    const loggedInUserName = localStorage.getItem('userName')
    let loggedInUserId;
    let loggedInUser
    console.log(loggedInUserName)
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
        getUsers()
    }, [])

    function getLoggedInUserId(userName) {
        if (users) {
            loggedInUser = users.find((user) => user.userName === userName)
        }
        loggedInUserId = loggedInUser.user_id

        return loggedInUserId
    }

    function onSubmit(data) {
        getLoggedInUserId(loggedInUserName)

        async function resetPassword() {
            try {
                const body = {password: data.password}
                const url = `http://localhost:8080/resetpassword/${loggedInUserId}`
                await axios.post(url, body).then((res) => {
                    history.push('/')
                })
            } catch
                (error) {
                console.log(error)
            }
        }
        resetPassword()
    }

    return (
        <div className="main-container-create-customer">
            <div className='information-container-create-customer'>
                <h2>Hi {loggedInUserName} ! Please reset Your Password</h2>
                <div className='customer-card-body'>
                    <form className='form-create-customer' onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-element'>
                            <label htmlFor='password'>Your New Password</label>
                            <input
                                type='password'
                                id='password'
                                {...register('password')}
                            />
                        </div>
                        <div className='form-element'>
                            <label htmlFor='password-reEntry'>Comfirm Your Password</label>
                            <input
                                type='password'
                                id='password-reEntry'
                                {...register('password-reEntry')}
                            />
                        </div>
                        <button type='submit' className='btn--create-customer'>
                            Reset Password
                        </button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default UserResetPassword_Function