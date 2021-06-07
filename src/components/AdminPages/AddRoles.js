import React from 'react'
import {useForm} from "react-hook-form";
import {useParams} from 'react-router-dom'
import axios from "axios";


function AddRoles() {
    const {register, handleSubmit} = useForm()
    const {id} = useParams();
    function onFormSubmit(data) {

        async function addRole(){
            await axios.post(`http://localhost:8080/securityManagement/appusers/addroles/${id}`,
                {
                    roleName : data.roleName
                })
                .then((res)=>{
                    console.log(res)
                }, (error)=>{
                    console.log(error)
                })
        }
        addRole()

    }

    return (

        <div className='main-container-create-customer'>
            <div className='information-container-create-customer'>
                <h2>Add Role(s)</h2>
                <div className='customer-card-body'>
                    <form className='form-create-customer' onSubmit={handleSubmit(onFormSubmit)}>
                        <div className='form-element'>
                            <label htmlFor='roleName'>Role Name：</label>
                            <input
                                type='text'
                                id='roleName'
                                {...register('roleName')}

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

