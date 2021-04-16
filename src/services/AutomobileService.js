import axios from 'axios'
const AUTOMOBILE_API_BASE_URL = "http://localhost:8080/cars"
const CUSTOMER_API_BASE_URL = "http://localhost:8080/customers";
class AutomobileService{

    getAutomobiles(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }
}

export default new AutomobileService()