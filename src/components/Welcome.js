import React, {Component} from 'react';
import './Welcome.css'
import {Button} from "./Button";

const loggedInUserName = localStorage.getItem('userName')

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    signIn =()=>{
        this.props.history.push('/sign-in')
    }
    goHome =()=>{
        this.props.history.push('/home')
    }

    render() {
        return (
            <>
                {loggedInUserName ?
                    <div className='welcome-popup'>
                        <div className='box'>
                            <div className='text'>
                                <h1>Welcome back {loggedInUserName} !</h1>
                            </div>
                            <div className='option'>
                                <div className='wrapper'>
                                    <h3>Not {loggedInUserName}?</h3>
                                    <Button className='btn'
                                            buttonStyle='btn--page'
                                            buttonSize='btn--medium'
                                            onClick={this.signIn}
                                >
                                        Sign In
                                    </Button>
                                </div>
                                <div className='home'>
                                    <Button className='btn'
                                            buttonStyle='btn--page'
                                            buttonSize='btn--medium'
                                            onClick={this.goHome}
                                    >
                                        Home
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                    :
                    <div className='welcome-popup'>
                        <div className='box'>
                            <h2>You have not sign in yet!</h2>
                            <div className='button-wrapper'>
                                <Button className='btn'
                                        buttonStyle='btn--page'
                                        buttonSize='btn--medium'
                                        onClick={this.signIn}
                                >
                                    Sign In
                                </Button>
                                <Button className='btn'
                                        buttonStyle='btn--page'
                                        buttonSize='btn--medium'
                                        onClick={this.goHome}
                                >
                                    Home
                                </Button>
                            </div>


                        </div>
                    </div>
                }
            </>
        )
    }
}
export default Welcome