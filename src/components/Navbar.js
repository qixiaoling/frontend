import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Button} from "./Button";
import './Navbar.css';

function Navbar(){
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () =>setClick(false)

    const showButton = () =>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        eGineRight <i className="fas fa-leaf"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nave-menu active': 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/customer" className='nav-links' onClick={closeMobileMenu}>
                                Customer
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/automobile" className='nav-links' onClick={closeMobileMenu}>
                                Automobile
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/inspection" className='nav-links' onClick={closeMobileMenu}>
                                Inspection
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/inventory" className='nav-links' onClick={closeMobileMenu}>
                                Inventory
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/invoice" className='nav-links' onClick={closeMobileMenu}>
                                Invoice
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button> }
                </div>
            </nav>
        </>
    )
}
export default Navbar