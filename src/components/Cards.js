import React, {Component} from 'react'
import CardItem from "./CardItems"
import './Cards.css'
import car_1 from '../images/Car_1.jpg'
import Customer from '../images/Customer.jpg'
import Inspection from '../images/Inspection.jpg'
import Inventory from '../images/Inventory_1.jpg'
import Invoices_1 from '../images/Invoices_1.jpg'


function Cards(){
    return(
        <div className='cards'>
            <h1 className='cards-title'>Check out our facilities!</h1>
            <div className='cards__container'>
                <div className='cards_wrapper'>
                    <ul className='cards__items'>
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
                    </ul>
                </div>
                <div className='cards_wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            imgSrc = {Inspection}
                            text ='We value our customer as they value our service'
                            path ='/Inspections'
                        />
                        <CardItem
                            imgSrc = {Inventory}
                            text ='We value our customer as they value our service'
                            path ='/Inventories'
                        />
                        <CardItem
                            imgSrc = {Invoices_1}
                            text ='We value our customer as they value our service'
                            path ='/Invoices'
                        />
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Cards