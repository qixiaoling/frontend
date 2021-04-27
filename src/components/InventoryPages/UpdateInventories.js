import React, {Component} from 'react'
import axios from "axios";
import '../CusotmerPages/CreateCustomers'

const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJPbGFmIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IkFETUlOIn0seyJhdXRob3JpdHkiOiJVU0VSX1RSRSJ9LHsiYXV0aG9yaXR5IjoiVVNFUl9GUk8ifSx7ImF1dGhvcml0eSI6IlVTRVJfVEVDIn0seyJhdXRob3JpdHkiOiJVU0VSX0JBQyJ9XSwiaWF0IjoxNjE4MzkxNjIwLCJleHAiOjE2MTk1NjA4MDB9.dtSmT_MCQw8Z2OtVv8f_Yag8b_vsTflMkZdZ3M_NrcgtjtedGJaS77nFWTMcCx5ZvzB1n9AnNpcixOCDOIsYew'
const apiUrl = 'http://localhost:8080/customers';
axios.interceptors.request.use(
    config=> {
        config.headers.authorization = `Bearer ${accessToken}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

class UpdateInventories extends Component{
    constructor(props) {
        super(props);
        this.state={
            id: this.props.match.params.id,
            itemDescription: '',
            pricePerUnit: '',
            manufactor: '',
            availableUnit:　'',
        }
    }

}