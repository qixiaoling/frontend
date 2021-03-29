import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactDom from "react-dom";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/'
ReactDom.render(<App />, document.getElementById("root"));
