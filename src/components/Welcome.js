import React, {Component} from 'react';
import './Welcome.css'
import {Button} from "./Button";

const loggedInUserName = localStorage.getItem('userName')

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        }
    }

    componentDidMount() {
        if (loggedInUserName) {
            this.setState({userName: loggedInUserName})
        }
    }
    signIn=()=>{
        this.props.history.push('/sign-in')
    }

    render() {
        return (
            <>
                {this.state.userName ?
                    <div className='welcome-popup'>
                        <div className='box'>
                            <div className='text'>
                                <h1>Welcome back {this.state.userName} !</h1>
                            </div>
                            <div className='options'>
                                <div className='wrapper'>
                                    <h3>Not {this.state.userName}?</h3>
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
                                            onClick={this.signIn}
                                    >
                                        Home
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                    :
                    <div className='Welcome-popup'>
                        <div className='box'>
                            <h2>You have not sign in yet!</h2>

                        </div>
                    </div>
                }
            </>
        )
    }
}
export default Welcome