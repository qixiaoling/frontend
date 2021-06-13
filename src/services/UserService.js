import React from 'react'
import axios from "axios";

const USER_RESET_API_URL = "http://localhost:8080/resetpassword";

class UserService{
    resetPassword(id, password){
        return axios.post(USER_RESET_API_URL + '/' + id, password)
    }
}
export default new UserService()