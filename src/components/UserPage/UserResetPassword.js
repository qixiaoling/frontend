import React, {useState, useEffect} from 'react'
import {useForm} from "react-hook-form";
import axios from "axios";
import '../CusotmerPages/CreateCustomers.css'

function UserResetPassword(){
    const [users, setUsers] = useState([])
    const{register, handleSubmit} = useForm()
    const loggedInUserName = localStorage.getItem('userName')
    console.log(loggedInUserName)

    async function getUsers() {
        try {
            const result = await axios.get("http://localhost:8080/securityManagement/appusers");
            console.log(result.data)
            setUsers(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
      getUsers()
    },[])

    function onSubmit(data){
        console.log("do that later")
        const id = localStorage.getItem('loggedInUserId')
        console.log(id)
    }

    return(
        <div className="main-container-create-customer">
            <div className='information-container-create-customer'>
                <h2>Reset Your Password</h2>
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
export default UserResetPassword