import axios from 'axios'
const AUTOMOBILE_API_BASE_URL = "http://localhost:8080/cars"
const CUSTOMER_API_BASE_URL = "http://localhost:8080/customers";
class AutomobileService{

    getAutomobiles(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }
    createAutomobiles(automobile, customerId){
        return axios.post(AUTOMOBILE_API_BASE_URL + '/' + customerId, automobile)
    }
    deleteAutomobiles(numberPlate){
        return axios.delete(AUTOMOBILE_API_BASE_URL + '/' + numberPlate )
    }
    updateAutomobiles(automobile, numberPlate){
        return axios.put(AUTOMOBILE_API_BASE_URL + '/' + numberPlate, automobile)
    }

}

export default new AutomobileService()