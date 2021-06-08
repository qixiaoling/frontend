import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import {useParams} from 'react-router-dom'
import axios from "axios";


function AddRoles() {
    const {register, handleSubmit} = useForm()
    const {id} = useParams();
    const url = `http://localhost:8080/securityManagement/appusers/addroles/${id}`


    function onFormSubmit(data) {


        async function addRole(){

            console.log(data)
            const body={
                role:{
                    roleName: data.roleName
                }
            }

            await axios.post(url, body).then((res)=>{
                console.log(res)
            },(error)=>{
                console.log(error)
            })
        }
        addRole();

    }

    return (

        <div className='main-container-create-customer'>
            <div className='information-container-create-customer'>
                <h2>Add Role(s)</h2>
                <div className='customer-card-body'>
                    <form className='form-create-customer' onSubmit={handleSubmit(onFormSubmit)}>
                        <div className='form-element'>
                            <label htmlFor='roleName_1'>Role Name 1：</label>
                            <input
                                type='text'
                                id='roleName_1'
                                {...register('roleName_1')}

                            />
                        </div>
                        <div className='form-element'>
                            <label htmlFor='roleName_2'>Role Name 2：</label>
                            <input
                                type='text'
                                id='roleName_2'
                                {...register('roleName_2')}

                            />
                        </div>

                        <button type='submit' className='btn--create-customer'>
                            Add Role(s)
                        </button>

                    </form>

                </div>
            </div>

        </div>
    )
}

export default AddRoles

