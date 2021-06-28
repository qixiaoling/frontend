import React, {Component} from 'react'
import {Button} from "./Button";
import './Footer.css'
import {Link} from "react-router-dom";

class Footer extends Component{
    constructor(props) {
        super(props);
        this.state={
            name: '',
        }
    }

    render(){
        return(
            <div className='footer-container'>
                <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                        Join the Adventure by speaking up !
                    </p>
                    <p className='footer-subscription-text'>
                        Contact Admin
                    </p>
                    <div className='input-areas'>
                        <form className='input-content'>
                            <textarea
                                name='comment'
                                placeholder='Your Comment'
                                className='footer-input'
                            />
                            <Button
                                className='btn'
                                buttonStyle='btn--page'
                                buttonSize='btn--medium'
                            >Submit</Button>
                        </form>
                    </div>
                </section>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>eGineRight</h2>
                            <Link to='/sign-in'>How it works</Link>
                            <Link to='/'>Services during Corona</Link>
                            <Link to='/'>Virtuele showroom</Link>
                            <Link to='/'>About eGineRIght</Link>
                            <Link to='/'>News</Link>

                        </div>
                        <div className='footer-link-items'>
                            <h2>Private Lease</h2>
                            <Link to='/'>Inventory New</Link>
                            <Link to='/'>Inventory Occasion</Link>
                            <Link to='/'>Deals/Promotions</Link>
                            <Link to='/'>Sponsorships</Link>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>About Us</h2>
                            <Link to='/'>Location</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Twitter</Link>
                        </div>
                    </div>
                </div>
                <section className='social-media'>
                    <div className='social-media-wrap'>
                        <div className='footer-logo'>
                            <Link to='/' className='social-logo'>
                                eGineRight <i className="fas fa-leaf"/>
                            </Link>
                        </div>
                        <small className='website-rights'>eGineRight © 2021 </small>
                        <div className='social-icons'>
                            <Link
                                className='social-icon-link facebook'
                                to='/'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <i className='fab fa-facebook-f'/>
                            </Link>
                            <Link
                                className='social-icon-link instagram'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <i className='fab fa-instagram'/>
                            </Link>
                            <Link
                                className='social-icon-link youtube'
                                to='/'
                                target='_blank'
                                aria-label='Youtube'
                            >
                                <i className='fab fa-youtube'/>
                            </Link>
                            <Link
                                className='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <i className='fab fa-twitter'/>
                            </Link>
                            <Link
                                className='social-icon-link linkedin'
                                to='/'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <i className='fab fa-linkedin'/>
                            </Link>

                        </div>
                    </div>
                </section>
            </div>
        )
    }

}
export default Footer