import React, {Component} from 'react'
import {Button} from "../Button";

class CreateUsersResult extends Component{

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            createUsersFailed: false,
        }
        this.backToUserList = this.backToUserList.bind(this);
    }

    componentDidMount() {
        if (this.props.status === 200) {
            setTimeout(() => {
                this.setState({loading: false})
            }, 1500)
        } else {
            this.setState({createUsersFailed: true})
        }
    }
    backToUserList = (e)=>{
        e.preventDefault();
        this.props.history.push('/admin');
    }


    render() {
        return (
            <>
                {this.state.createUsersFailed ? <h2>User is not added, please try again</h2>
                    :
                    <>
                        {this.state.loading ? <h2>Loading...</h2>
                            :
                            <div>
                                <h2>User is created successfully.</h2>
                                <Button className='btn'
                                        buttonStyle='btn--page'
                                        buttonSize='btn--medium'
                                        onClick={this.backToUserList}
                                >Back to User List
                                </Button>
                            </div>

                        }
                    </>
                }
            </>
        )
    }

}
export default CreateUsersResult