import axios from "axios";
const ADMIN_API_BASE_URL = "http://localhost:8080/securityManagement/appusers"

class AdminService{
    getAllUsers(){
        return axios.get(ADMIN_API_BASE_URL)
    }
    createUser(user){
        return axios.post(ADMIN_API_BASE_URL, user)
    }

}
export default new AdminService()