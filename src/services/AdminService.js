import axios from "axios";
const ADMIN_API_BASE_URL = "http://localhost:8080/securityManagement/appusers"
const ADMIN_ROLE_BASE_URL = "http://localhost:8080/securityManagement/appusers/addroles"
const ADMIN_USER_BASE_URL = "http://localhost:8080/securityManagement/appusers/update"

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
    updateUser(user, id){
        return axios.put(ADMIN_USER_BASE_URL + '/' + id, user )
    }

}
export default new AdminService()