import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Button} from "./Button";
import './Navbar.css';
import ConsumerContext, {ConsumerConsumer} from '../customerContext'
import ListCustomers from "./CusotmerPages/ListCustomers";


function Navbar(props){
    const loggedInUserName = localStorage.getItem('userName')
    const history = useHistory();

    const [navLinkOpen, navLinkToggle] = useState(false)
    const handleNavLinksToggle = () =>{
        navLinkToggle(!navLinkOpen)
    }
    const renderClasses = () =>{
        let classes = "navlinks";
        if(navLinkOpen){
            classes += " active"
        }
        return classes;
    };
    console.log(props.consumerWithoutCar.length)

    function signOut (){
        localStorage.removeItem('token');
        localStorage.removeItem('userName')
       history.push('/')
    }


    return(
        <>
            <nav className="navbar">
                    <Link to="/" className="navbar-logo" >
                        eGineRight <i className="fas fa-leaf"></i>
                    </Link>

                    <ul className={renderClasses()}>
                        <li className='nav-item'>
                            <Link to="/home" className='link' >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/customers" className='link' >
                                Customer
                            </Link>
                        </li>
                        {props.consumerWithoutCar.length === 0 ?
                            <li className='nav-item'>
                                <Link to="/automobiles" className='link'>
                                    Automobile
                                </Link>
                            </li>
                            :
                            null
                        }
                        <li className='nav-item'>
                            <Link to="/inspections" className='link' >
                                Inspection
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/inventories" className='link' >
                                Inventory
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/invoices" className='link'>
                                Invoice
                            </Link>
                        </li>
                        {loggedInUserName === 'Olaf'?
                        <li className='nav-item'>
                            <Link to="/admin" className='link'>
                                Admin
                            </Link>
                        </li>
                            : null
                        }
                        <li className='nav-item'>
                            <Link to="/password-reset" className='link'>
                                Password
                            </Link>
                        </li>
                        <li className='sign-up-button'>
                            {loggedInUserName ?
                                <Button
                                    className='btn'
                                    buttonStyle='btn--primary'
                                    buttonSize='btn--large'
                                    onClick={signOut}
                                >
                                    Sign Out
                                </Button>
                                :
                                <Link to='/sign-in'>
                                    <Button
                                        className='btn'
                                        buttonStyle='btn--primary'
                                        buttonSize='btn--large'
                                    >
                                        Sign In
                                    </Button>
                                </Link>

                            }
                        </li>
                    </ul>

                <div className="menu-icon" onClick={handleNavLinksToggle}>
                    <i className='fas fa-bars' />
                </div>

            </nav>

        </>
    )
}
// Navbar.contextType = ConsumerContext;
export default Navbar