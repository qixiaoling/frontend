import React from 'react'
import axios from "axios";
const INVENTORY_API_BASE_URL = "http://localhost:8080/inventories"

class InventoryService{
    getInventories(){
        return axios.get(INVENTORY_API_BASE_URL)
    }
    createInventory(inventory){
        return axios.post(INVENTORY_API_BASE_URL, inventory)
    }
    deleteInventory(itemId){
        return axios.delete(INVENTORY_API_BASE_URL + '/' + itemId)
    }
}
export default new InventoryService()