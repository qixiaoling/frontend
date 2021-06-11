import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import {useParams, useHistory} from 'react-router-dom'
import axios from "axios";


function AddRoles() {
    const {register, handleSubmit} = useForm()
    const {id} = useParams();
    const url = `http://localhost:8080/securityManagement/appusers/addroles/${id}`
    const history = useHistory()

    function onFormSubmit(data) {


        async function addRole(){

            console.log(data)
            const body=[
                {roleName: data.roleName}

            ]
            await axios.post(url, body).then((res)=>{
                console.log(res)
                history.push('/admin')
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
                            <label htmlFor='department'>Choose the department
                                <select
                                    id='department'
                                    {...register('roleName')}
                                    >
                                    <option value='USER_BAC'>Back Office</option>
                                    <option value='USER_FRO'>Front Office</option>
                                    <option value='USER_TEC'>Technical Department</option>
                                    <option value='USER_TRE'>Treasury Department</option>
                                    <option value='ADMIN'>Administrator</option>
                                </select>
                            </label>

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

