import axios from "axios";
const ADMIN_API_BASE_URL = "http://localhost:8080/securityManagement/appusers"
const ADMIN_ROLE_BASE_URL = "http://localhost:8080/securityManagement/appusers/addroles"

class AdminService{
    getAllUsers(){
        return axios.get(ADMIN_API_BASE_URL)
    }
    createUser(user){
        return axios.post(ADMIN_API_BASE_URL, user)
    }
    addRoleToUser(roles, id){
        return axios.post(ADMIN_ROLE_BASE_URL + '/' + id, roles)
    }

}
export default new AdminService()