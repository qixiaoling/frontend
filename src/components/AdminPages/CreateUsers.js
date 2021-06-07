import react, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useForm} from "react-hook-form";
import axios from "axios";

function CreateUsers(){
    const {register, handleSubmit} = useForm()
    const history = useHistory()


    function onFormSubmit(data){
        async function createUser(){
                await axios.post('http://localhost:8080/securityManagement/appusers',
                    {
                        userName: data.userName,
                        password: data.password,
                        email: data.email
                    }
                )
                    .then((res)=>{
                        console.log(res)
                        history.push('/admin')
                    }, (error)=>{
                        console.log(error)
                    })
        };
        createUser();




    }



    return(
        <div className='main-container-create-customer'>
            <div className='information-container-create-customer'>
                <h2>Add User</h2>
                <div className='customer-card-body'>
                    <form className='form-create-customer' onSubmit={handleSubmit(onFormSubmit)}>
                        <div className='form-element'>
                            <label htmlFor='userName'>User Name：</label>
                            <input
                                type='text'
                                id='userName'
                                {...register('userName')}
                                />
                        </div>
                        <div className='form-element'>
                            <label htmlFor='password'>Password：</label>
                            <input
                                type='password'
                                id='password'
                                {...register('password')}
                            />
                        </div>
                        <div className='form-element'>
                            <label htmlFor='email'>Email：</label>
                            <input
                                type='email'
                                id='email'
                                {...register('email')}
                            />
                        </div>
                        <button type='submit' className='btn--create-customer'>
                            Create
                        </button>

                    </form>

                </div>
            </div>

        </div>
    )

}
export default CreateUsers