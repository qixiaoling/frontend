import react, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useForm} from "react-hook-form";
import axios from "axios";


function CreateUsers() {

    const {register, handleSubmit, formState : {errors}} = useForm({
        mode: 'onBlur'
    })
    const history = useHistory()


    function onFormSubmit(data) {
        async function createUser() {
            await axios.post('http://localhost:8080/securityManagement/appusers',
                {
                    userName: data.userName,
                    password: data.password,
                    email: data.email
                }
            )
                .then((res) => {
                    console.log(res)
                    history.push('/admin-loading')
                }, (error) => {
                    console.log(error)
                })
        };
        createUser();


    }



    return (
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
                                {...register('userName', {
                                    required: {
                                        value: true,
                                        message : 'This field cannot be empty',
                                    },
                                    pattern: {

                                        message: 'No special character can be used.'
                                    }
                                })}
                            />
                        </div>
                        {errors.userName && <p className='alert alert-danger'>{errors.userName.message}</p>}

                        <div className='form-element'>
                            <label htmlFor='password'>Password：</label>
                            <input
                                type='password'
                                id='password'
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'This field cannot be empty',
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Please use minimal 8 characters'
                                    }
                                })}
                            />
                        </div>
                        {errors.password && <p className='alert alert-danger'>{errors.password.message}</p>}

                        <div className='form-element'>
                            <label htmlFor='email'>Email：</label>
                            <input
                                type='email'
                                id='email'
                                {...register('email',{
                                   required : {
                                       value : true,
                                       message : 'This field cannot be empty'
                                   },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Email is not valid'
                                    }
                                })}
                                />
                        </div>
                        {errors.email && <p className='alert alert-danger'>{errors.email.message}</p>}

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