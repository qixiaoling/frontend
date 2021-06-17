import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button} from "./Button";



class CardItem extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                <li className='card__item'>
                    <Link className='cards_item_link' to={this.props.path}>
                        <img src={this.props.depImage} alt={this.props.text} className="dep-img"/>
                        <h3>{this.props.title}</h3>
                        <div className="button--wrapper">
                            <Button
                                className='btn'
                                buttonStyle='btn--card'
                                buttonSize='btn--small'
                            >
                                Read More
                            </Button>

                        </div>

                    </Link>


                </li>
            </>
        )
    }

}
export default CardItem