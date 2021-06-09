import React from 'react'
import {useForm} from "react-hook-form";
import axios from "axios";
import '../CusotmerPages/CreateCustomers.css'

function UserResetPassword(){

    const{register, handleSubmit} = useForm()

    function onSubmit(data){
        console.log("do that later")
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
                    </form>

                </div>
            </div>

        </div>
    )
}
export default UserResetPassword