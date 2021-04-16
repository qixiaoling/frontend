import axios from 'axios'
const AUTOMOBILE_API_BASE_URL = "http://localhost:8080/cars"
class AutomobileService{

    getAutomobiles(){
        return axios.get(AUTOMOBILE_API_BASE_URL);
    }
}

export default new AutomobileService()