import React, {Component} from 'react';
import {Button} from './Button';
import './Navbar.css'
import {Link} from "react-router-dom";
import ConsumerContext, {ConsumerConsumer} from '../customerContext'
import UserContext, {UserConsumer} from "../userContext";


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navLinkOpen: false,
        }
        this.handleNavLinksToggle = this.handleNavLinksToggle.bind(this);
        this.renderClasses = this.renderClasses.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    handleNavLinksToggle() {
        this.setState((prevState => {
                return {
                    navLinkOpen: !prevState.navLinkOpen
                }
            })
        )
    }

    renderClasses() {
        let classes = 'navlinks ';
        if (this.state.navLinkOpen) {
            classes += ' active'
        }
        return classes;
    }


    signOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        console.log(this.props);
        window.location = '/'
        // this.props.history.push('/')

    }

    render() {
        return (
            <ConsumerConsumer>
                {dataCustomer => (
                    <UserConsumer>
                        {dataUser => (

                            <>
                                <nav className="navbar">
                                    <Link to="/home" className="navbar-logo">
                                        eGineRight <i className="fas fa-leaf"></i>
                                    </Link>

                                    <ul className={this.renderClasses()}>
                                        <li className='nav-item'>
                                            <Link to="/home" className='link'>
                                                Home
                                            </Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link to="/customers" className='link'>
                                                Customer
                                            </Link>
                                        </li>
                                        {dataCustomer.consumerWithoutCar.length === 0 ?
                                            <li className='nav-item'>
                                                <Link to="/automobiles" className='link'>
                                                    Automobile
                                                </Link>
                                            </li>
                                            :
                                            null
                                        }
                                        <li className='nav-item'>
                                            <Link to="/inspections" className='link'>
                                                Inspection
                                            </Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link to="/inventories" className='link'>
                                                Inventory
                                            </Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link to="/invoices" className='link'>
                                                Invoice
                                            </Link>
                                        </li>

                                        {dataUser.currentUser === 'Olaf' ?
                                            <li className='nav-item'>
                                                <Link to="/admin" className='link'>
                                                    Admin
                                                </Link>
                                            </li>
                                            : null
                                        }
                                        {dataUser.currentUser ?
                                            <li className='nav-item'>
                                                <Link to="/password-reset" className='link'>
                                                    Password
                                                </Link>
                                            </li>
                                            :
                                            null
                                        }
                                        <li className='sign-up-button'>
                                            {dataUser.currentUser ?
                                                <Button
                                                    className='btn'
                                                    buttonStyle='btn--primary'
                                                    buttonSize='btn--large'
                                                    onClick={this.signOut}
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

                                    <div className="menu-icon" onClick={this.handleNavLinksToggle}>
                                        <i className='fas fa-bars'/>
                                    </div>

                                </nav>

                            </>
                        )}
                    </UserConsumer>
                )}
            </ConsumerConsumer>


        )
    }
}

Navbar.contextType = ConsumerContext;
Navbar.contextType = UserContext;
export default Navbar