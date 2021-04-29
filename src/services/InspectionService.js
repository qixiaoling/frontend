import axios from "axios";
const INSPECTION_API_BASE_URL = "http://localhost:8080/inspections"


class InspectionService{
    getInspections(){
        return axios.get(INSPECTION_API_BASE_URL);

    }
    createInspections(inspection, numberPlate){
        return axios.post(INSPECTION_API_BASE_URL + '/' + numberPlate, inspection)
    }
    getInspectionById(inspectionNumber){
        return axios.get(INSPECTION_API_BASE_URL + '/' + inspectionNumber)
    }
    updateInspections(inspection, inspectionNumber){
        return axios.put(INSPECTION_API_BASE_URL + '/' + inspectionNumber, inspection)
    }
    deleteInspections(inspectionNumber){
        return axios.delete(INSPECTION_API_BASE_URL+'/'+inspectionNumber)
    }
}

export default new InspectionService