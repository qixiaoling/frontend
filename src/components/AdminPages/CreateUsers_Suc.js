import React, {useState, useEffect} from 'react'
import ListUsers from "./ListUsers";


function CreateUsers_Suc(props){
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        }, 3000)
    })

    return(
        <>
            {isLoading ?
            <p className='alert alert-success'>The user is added</p> : <ListUsers/>}
        </>


    )

}
export default CreateUsers_Suc