import React, {Component} from 'react'
import CardItem from "./CardItems"
import './Cards.css'
import car_1 from '../images/Car_1.jpg'
import Customer from '../images/Customer.jpg'
import Inspection from '../images/Car_1.jpg'
import car_1 from '../images/Car_1.jpg'
import car_1 from '../images/Car_1.jpg'


function Cards(){
    return(
        <div className='cards'>
            <h1>Customers</h1>
            <div className='cards__container'>
                <div className='cards_wrapper'>
                    <ul className='cards__item'>
                        <CardItem
                            imgSrc = {Customer}
                            text ='We value our customer as they value our service'
                            path ='/Customers'
                        />
                        <CardItem
                            imgSrc = {car_1}
                            text ='We value our customer as they value our service'
                            path ='/Cars'
                        />
                        <CardItem
                            imgSrc = {car_1}
                            text ='We value our customer as they value our service'
                            path ='/Customer'
                        />
                        <CardItem
                            imgSrc = {car_1}
                            text ='We value our customer as they value our service'
                            path ='/Customer'
                        />
                        <CardItem
                            imgSrc = {car_1}
                            text ='We value our customer as they value our service'
                            path ='/Customer'
                        />
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Cards