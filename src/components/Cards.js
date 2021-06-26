import React, {Component} from 'react'
import CardItem from "./CardItems"
import './Cards.css'
import customer from "../images/Customer.jpg"
import Car_1 from "../images/Car_1.jpg"
import Inspection from "../images/Inspection.jpg"
import Inventory_1 from "../images/Inventory_1.jpg"
import Invoices_1 from "../images/Invoices_1.jpg"
import customerContext, {ConsumerConsumer} from "../customerContext";
import ConsumerContext from "../customerContext";
import Navbar from "./Navbar";

class Cards extends Component{
    render(){
        return(
            <ConsumerConsumer>
                {data=>{
                    return(
                        <div className='cards'>
                            <div className='cards__container'>
                                <div className='card__wrapper'>
                                    <ul className='cards__items'>
                                        <CardItem
                                            depImage = {customer}
                                            title = 'CUSTOMER'
                                            text ='Read More'
                                            path ='/customers'
                                        />
                                        {data.consumerWithoutCar.length>0 ? null :
                                        <CardItem
                                            depImage = {Car_1}
                                            title = 'AUTOMOBILE'
                                            text ='Read More'
                                            path ='/automobiles'
                                        />
                                        }
                                        <CardItem
                                            depImage = {Inspection}
                                            title = 'INSPECTION'
                                            text ='Read More'
                                            path ='/inspections'
                                        />
                                    </ul>
                                </div>
                                <div className='card__wrapper'>
                                    <ul className='cards__items'>

                                        <CardItem
                                            depImage = {Inventory_1}
                                            title = 'INVENTORY'
                                            text ='Read More'
                                            path ='/inventories'
                                        />
                                        <CardItem
                                            depImage = {Invoices_1}
                                            title = 'INVOICE'
                                            text ='Read More'
                                            path ='/invoices'
                                        />
                                        <CardItem
                                            depImage = {Inspection}
                                            title = 'PASSWORD'
                                            text ='Read More'
                                            path ='/password-reset'
                                        />
                                    </ul>
                                </div>


                            </div>
                        </div>
                    )
                }}

            </ConsumerConsumer>

        )
    }

}
Navbar.contextType = ConsumerContext;
export default Cards