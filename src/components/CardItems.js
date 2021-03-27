import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button} from "./Button";



function CardItem(props){
    return(
        <>
            <li className='card__item'>
                    <Link className='cards_item_link' to={props.path}>
                        <img src={props.depImage} alt={props.text} className="dep-img"/>
                        <h3>{props.title}</h3>
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
export default CardItem