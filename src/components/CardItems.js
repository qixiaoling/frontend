import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button} from "./Button";



function CardItem(props){
    return(
        <>
            <li className='cards__item'>
                    <Link className='cards_item_link' to={props.path}>
                        <i className={props.cardLogo}></i>
                        <h3>{props.title}</h3>
                        <Button
                            className='cards__btns'
                        >
                            {props.text}
                        </Button>
                    </Link>


            </li>
        </>
    )
}
export default CardItem