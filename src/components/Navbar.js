import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Button} from "./Button";
import './Navbar.css';

function Navbar(){
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

    return(
        <>
            <nav className="navbar">
                    <Link to="/" className="navbar-logo" >
                        eGineRight <i className="fas fa-leaf"></i>
                    </Link>

                    <ul className={renderClasses()}>
                        <li className='nav-item'>
                            <Link to="/" className='link' >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/customers" className='link' >
                                Customer
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/automobiles" className='link' >
                                Automobile
                            </Link>
                        </li>
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
                        <li className='sign-up-button'>
                            <Button
                                className='btns'
                                buttonStyle='btn--primary'
                                buttonSize='btn--large'
                            >
                                Sign In
                            </Button>
                        </li>
                    </ul>

                <div className="menu-icon" onClick={handleNavLinksToggle}>
                    <i className='fas fa-bars' />
                </div>
            </nav>
        </>
    )
}
export default Navbar