import React, {Component} from 'react'
import {Link} from 'react-router-dom'



function CardItem(props){
    return(
        <>
            <li className='cards__item'>
                <Link className='cards_item_link' to={props.path}>
                    <figure className='cards__item__pic-wrap'>
                        <img
                            src={props.imgSrc}
                            alt='Facility Image'
                            className='cards__item__img'/>
                    </figure>
                    <div className='card__item__info'>
                        <h5 className='cards_item_text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}
export default CardItem