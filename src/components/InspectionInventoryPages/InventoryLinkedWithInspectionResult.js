import React, {Component} from 'react'


class InventoryLinkedWithInspectionResult extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            addQuantityFailed: false,
        }
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

    render() {
        return (
            <>
                {this.state.addQuantityFailed ? <h2>Quantity is not added. Please try again.</h2>
                    : <>{this.state.loading ? <h2>Loading...</h2>
                        : <h2>Quantity is added to the inspection successfully</h2>
                    }
                    </>
                }
            </>
        )
    }

}
export default InventoryLinkedWithInspectionResult