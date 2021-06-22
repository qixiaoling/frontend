import React, {Component} from 'react'
import {Button} from "../Button";

class UserResetPasswordResult extends Component{

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            resetPasswordFailed: false,
        }
        this.backToHome = this.backToHome.bind(this);
    }

    componentDidMount() {
        if (this.props.status === 200) {
            setTimeout(() => {
                this.setState({loading: false})
            }, 1500)
        } else {
            this.setState({resetPasswordFailed: true})
        }
    }
    backToHome = (e)=>{
        e.preventDefault();
        this.props.history.push('/');
    }


    render() {
        return (
            <>
                {this.state.resetPasswordFailed ? <h2>Reset password failed, please try again</h2>
                    :
                    <>
                        {this.state.loading ? <h2>Loading...</h2>
                            :
                            <div>
                                <h2>Password is reset successfully.</h2>
                                <Button className='btn'
                                        buttonStyle='btn--page'
                                        buttonSize='btn--medium'
                                        onClick={this.backToHome}
                                >Back to Home
                                </Button>
                            </div>

                        }
                    </>
                }
            </>
        )
    }

}
export default UserResetPasswordResult