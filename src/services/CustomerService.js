import axios from "axios";
const CUSTOMER_API_BASE_URL = "http://localhost:8080/customers";
const MESSAGE_API_BASE_URL = "http://localhost:8080/messageforCustomer";
class CustomerService{

    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }
    createCustomers(customer){
        return axios.post(CUSTOMER_API_BASE_URL, customer)
    }
    getCustomerById(customerId){
        return axios.get(CUSTOMER_API_BASE_URL + '/'+ customerId);
    }
    updateCustomer(customer, customerId){
        return axios.put(CUSTOMER_API_BASE_URL + '/'+ customerId, customer);
    }
    deleteCustomer(customerId){
        return axios.delete(CUSTOMER_API_BASE_URL + '/' + customerId);
    }
    confirmSendMessage(appUser, customerId){
        return axios.post(MESSAGE_API_BASE_URL + '/' + customerId, appUser);
    }
}
export default new CustomerService()