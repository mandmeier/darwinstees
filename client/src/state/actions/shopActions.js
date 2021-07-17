import * as api from '../api';
import store from '../../state/store';
import publicIp from 'react-public-ip'


export const addToCart = (itemId, lineage, generation, layout, evoIds, qty) => async dispatch =>  {
  // add cart cookie as well
  const cart = store.getState().shopState.cart
  // if cart already contains item, update qty
  const item = cart.find(item => item.itemId === itemId);
  if (item !== undefined) {
    dispatch({type: "UPDATE_QTY", payload: {itemId, qty: item.qty + qty}}) 
  } else {
    try {
      // fetch item or create if does not exist
      const { data: item } = await api.getOrCreateItem(itemId, lineage, generation, layout, evoIds);
      const cartItem = { ...item, qty }
      dispatch({type: "ADD_TO_CART", payload: cartItem}) 
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
    }
  }

}

export const updateQty = (itemId, qty) => async dispatch =>  {
  dispatch({type: "UPDATE_QTY", payload: {itemId, qty}}) 
}

export const emptyCart = () => async dispatch =>  {
  // empty cart cookies as well
  dispatch({type: "EMPTY_CART"}) 
}

export const removeItem = (itemId) => async dispatch => {
  // remove cart cookie as well
  console.log("removeItem")
  console.log(itemId)
  dispatch({type: "REMOVE_ITEM", payload: itemId})
}


export const processOrder = (orderData) => async dispatch => {
  try {

    const ipv4 = await publicIp.v4() || ""

    const customer = orderData.customer
    // create customer if does not exist, get customerId and orderId
    const {data: customerData} = await api.addOrUpdateCustomer(customer, orderData._id, ipv4)
    const {customerId} = customerData
  
    // save order in db
    const { data: confirmationNumber  } = await api.createOrder({...orderData, customer: {...orderData.customer, _id: customerId}})

    dispatch({type: "CONFIRM_ORDER", payload: confirmationNumber})
    
  } catch (error) {
    console.log(error)
  }


        // save order in db

        // send to print

}