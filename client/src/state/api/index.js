import axios from 'axios'
// Component.js
import { config } from '../../Constants'

var url = config.url.BACKEND_URL

console.log("MYURL")
console.log(url)

export const getEvos = (lineage) => axios.get(`${url}/server/evos/${lineage}`)

export const getMutants = (lineage) => axios.get(`${url}/server/mutants/${lineage}`)

export const getThumbs = () => axios.get(`${url}/server/thumbs`)

export const likeMutant = (lineage, _id, ipv4, isLiked) => axios.post(`${url}/server/like`, {lineage, _id, ipv4, isLiked})

export const getProduct = (_id) => axios.get(`${url}/server/products/${_id}`)

export const createDesign = (lineage, generation, layout, evoIds) => axios.post(`${url}/server/designs`, {lineage, generation, layout, evoIds})

export const getOrCreateItem = (itemId, lineage, generation, layout, evoIds) => axios.post(`${url}/server/items`, {itemId, lineage, generation, layout, evoIds})

export const sendPayment = (price, id, customer, orderId) => axios.post(`${url}/server/payment/`, {amount: (price * 100).toFixed(0), id, customer, orderId})

export const addOrUpdateCustomer = (customerData, orderId, ipv4) => axios.post(`${url}/server/customer/`, {customerData, orderId, ipv4})

export const createOrder = (orderData) => axios.post(`${url}/server/order/`, {orderData})

//export const addUserData = (email, ipv4) => axios.post(`${url}/server/subscribe/`, {email, ipv4})