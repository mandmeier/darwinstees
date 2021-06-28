import axios from 'axios'

//const url = 'https://darwinstees.herokuapp.com';
const url = 'http://localhost:5000'

export const getEvos = (lineage) => axios.get(`${url}/server/evos/${lineage}`)

export const getMutants = (lineage) => axios.get(`${url}/server/mutants/${lineage}`)

export const likeMutant = (lineage, _id) => axios.post(`${url}/server/like/${lineage}/${_id}`)

export const getProduct = (_id) => axios.get(`${url}/server/products/${_id}`)

export const createDesign = (lineage, generation, layout, evoIds) => axios.post(`${url}/server/designs`, {lineage, generation, layout, evoIds})

export const getOrCreateItem = (itemId, lineage, generation, layout, evoIds) => axios.post(`${url}/server/items`, {itemId, lineage, generation, layout, evoIds})

export const sendPayment = (price, id, customer, orderId) => axios.post(`${url}/server/payment/`, {amount: (price * 100).toFixed(0), id, customer, orderId})

export const addOrUpdateCustomer = (customerData, orderId) => axios.post(`${url}/server/customer/`, {customerData, orderId})

export const createOrder = (orderData) => axios.post(`${url}/server/order/`, {orderData})