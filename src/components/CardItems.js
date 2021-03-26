import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button} from "./Button";



function CardItem(props){
    return(
        <>
            <li className='cards__item'>
                    <Link className='cards_item_link' to={props.path}>
                        <i id="cardLogo" className={props.cardLogo}></i>
                        <h3>{props.title}</h3>
                        <div className="button--wrapper">
                            <Button
                                className='btn'
                                buttonStyle='btn--primary--card'
                                buttonSize='btn--small'
                            >
                                Read More
                            </Button>
                            <div className="button--arrow">
                                <i id="button--arrow--self" className="fas fa-angle-right"></i>
                            </div>

                        </div>

                    </Link>


            </li>
        </>
    )
}
export default CardItem