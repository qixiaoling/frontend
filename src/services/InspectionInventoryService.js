import React from 'react'
import axios from "axios";
const INS_INV_BASE_URL = 'http://localhost:8080/addinginventories'
const INS_INV_GETALL_URL = 'http://localhost:8080/links/getall'
class InspectionInventoryService {
    selectInventory(inspectionNumber, inventory){
        return axios.post(INS_INV_BASE_URL + '/' + inspectionNumber, inventory)
    }
    addQuantity(inspectionNumber, itemId, inspectionInventory){
        return axios.put(INS_INV_BASE_URL + '/' + inspectionNumber + '/' + itemId, inspectionInventory)
    }
    getAll(){
        return axios.get(INS_INV_GETALL_URL)
    }
}
export default new InspectionInventoryService()