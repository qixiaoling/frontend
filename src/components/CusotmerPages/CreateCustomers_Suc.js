import React, {useState, useEffect} from 'react'
import ListCustomers from "./ListCustomers";


function CreateUsers_Suc(props){
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        }, 1500)
    })

    return(
        <>
            {isLoading ?
                <p className='alert alert-success'>The customer is added</p> : <ListCustomers/>}
        </>


    )

}
export default CreateUsers_Suc