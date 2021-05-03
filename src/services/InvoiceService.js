import React from 'react';
import axios from "axios";
const INVOICE_API_BASE_URL = "http://localhost:8080/invoices"
class InvoiceService{
    getInvoices(){
        return axios.get(INVOICE_API_BASE_URL);
    }
    createInvoice(inspectionNumber){
        return axios.get(INVOICE_API_BASE_URL + '/generate/'+ inspectionNumber)
    }
    getInvoiceById(invoiceId){
        return axios.get(INVOICE_API_BASE_URL + '/' + invoiceId)
    }
    updateInvoiceById(invoice, invoiceId){
        return axios.put(INVOICE_API_BASE_URL + '/' + invoiceId, invoice)
    }
    deleteInvoiceById(invoiceId){
        return axios.delete(INVOICE_API_BASE_URL + '/' + invoiceId)
    }

}
export default new InvoiceService();