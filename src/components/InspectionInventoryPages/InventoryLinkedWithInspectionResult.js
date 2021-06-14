import React, {Component} from 'react'


class InventoryLinkedWithInspectionResult extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            addQuantityFailed: false,
        }
        this.backToInspectionList = this.backToInspectionList.bind(this);
    }

    componentDidMount() {
        if (this.props.status === 200) {
            setTimeout(() => {
                this.setState({loading: false})
            }, 1500)
        } else {
            this.setState({addQuantityFailed: true})
        }
    }

    backToInspectionList = (e) => {
        e.preventDefault();
        this.props.history.push('/inspections');
    }

    render() {
        return (
            <>
                {this.state.addQuantityFailed ? <h2>Quantity is not added. Please try again.</h2>
                    : <>{this.state.loading ? <h2>Loading...</h2>
                        :
                        <>
                            <h2>Quantity is added to the inspection successfully</h2>
                            <button className='btn--create-customer'
                                    onClick={this.backToInspectionList}>Back to Inspection List
                            </button>
                        </>

                    }
                    </>
                }
            </>
        )
    }

}
export default InventoryLinkedWithInspectionResult