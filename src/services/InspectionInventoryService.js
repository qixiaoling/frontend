import React from 'react'
import axios from "axios";
const INS_INV_BASE_URL = 'http://localhost:8080/addinginventories'
class InspectionInventoryService {
    selectInventory(inspectionNumber, inventory){
        return axios.post(INS_INV_BASE_URL + '/' + inspectionNumber, inventory)
    }
    addQuantity(inspectionNumber, itemId, inspectionInventory){
        return axios.put(INS_INV_BASE_URL + '/' + inspectionNumber + '/' + itemId, inspectionInventory)
    }
}
export default new InspectionInventoryService()