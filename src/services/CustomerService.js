import axios from "axios";
const CUSTOMER_API_BASE_URL = "http://localhost:8080/customers";
class CustomerService{
    getCustomers(){

        // const config = {
        //     headers: {
        //         Authorization: 'Bearer ' + localStorage.getItem('token')
        //     }
        // }
        return axios.get(CUSTOMER_API_BASE_URL);
    }
    createCustomers(customer){
        return axios.post(CUSTOMER_API_BASE_URL, customer)
    }
}
export default new CustomerService()