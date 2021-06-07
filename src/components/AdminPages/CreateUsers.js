import react, {useState} from 'react'
function CreateUsers(){
    const [user, setUser] = useState({})

    return(
        <div className='main-container-create-customer'>
            <div className='information-container-create-customer'>
                <h2>Add User</h2>
                <div className='customer-card-body'>
                    <form className='form-create-customer'>
                        <div className='form-element'>
                            <label>User Name：</label>


                        </div>

                    </form>
                </div>
            </div>

        </div>
    )

}
export default CreateUsers