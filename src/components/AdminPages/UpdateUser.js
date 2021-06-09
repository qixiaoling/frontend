import React, {useState, useEffect} from 'react'
import {useForm} from "react-hook-form";
import {useParams} from 'react-router-dom'
import '../CusotmerPages/CreateCustomers.css'
import axios from "axios";

function UpdateUser() {

    const {register, handleSubmit} = useForm()
    const {id} = useParams()
    const url = `http://localhost:8080/securityManagement/appusers/update/${id}`


    function onFormSubmit(data) {
        async function performUpdate(){
            const body={
                userName: data.userName,
                password: data.password,
                email: data.email,
            }
            try{
                await axios.put(url, body).then((res)=>{
                    console.log(res)
                    console.log('I just updated.')
                })
            }catch(error){
                console.log(error)
            }
        }
        performUpdate()
    }

    return (
        <div className='main-container'>
            <div className='information-container'>
                <h2>Update User</h2>
                <div className='customer-card-body'>
                    <form className='form-create-customer' onSubmit={handleSubmit(onFormSubmit)}>
                        <div className='form-element'>
                            <label htmlFor='userName'>User Name:</label>
                            <input
                                type='text'
                                id='userName'
                                {...register('userName')}
                            />
                        </div>
                        <div className='form-element'>
                            <label htmlFor='password'>Password:</label>
                            <input
                                type='password'
                                id='password'
                                {...register('password')}
                            />
                        </div>
                        <div className='form-element'>
                            <label htmlFor='email'>Email:</label>
                            <input
                                type='text'
                                id='email'
                                {...register('email')}
                            />
                        </div>
                        <div className='form-element-button'>
                            <button className='btn--create-customer' type='submit'>
                                Update
                            </button>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    )
}

export default UpdateUser

