import React, {Component} from 'react'
import CardItem from "./CardItems"
import './Cards.css'



function Cards(){
    return(
        <div className='cards'>
            <div className='cards__container'>
                <div className='card__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            cardLogo = "fa fa-address-card"
                            title = 'CUSTOMER'
                            text ='Read More'
                            path ='/Customers'
                        />
                        <CardItem
                            cardLogo = "fas fa-car-alt"
                            title = 'CAR'
                            text ='Read More'
                            path ='/Cars'
                        />
                    </ul>
                </div>
                <div className='card__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            cardLogo = "fas fa-drafting-compass"
                            title = 'INSPECTION'
                            text ='Read More'
                            path ='/Inspections'
                        />
                        <CardItem
                            cardLogo = "fas fa-boxes"
                            title = 'INVENTORY'
                            text ='Read More'
                            path ='/Inventories'
                        />
                        <CardItem
                            cardLogo ="fas fa-file-invoice-dollar"
                            title = 'INVOICE'
                            text ='Read More'
                            path ='/Invoices'
                        />
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Cards