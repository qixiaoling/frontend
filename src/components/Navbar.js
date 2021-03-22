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
                            <Link to="/customer" className='link' >
                                Customer
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/automobile" className='link' >
                                Automobile
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/inspection" className='link' >
                                Inspection
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/inventory" className='link' >
                                Inventory
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/invoice" className='link'>
                                Invoice
                            </Link>
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