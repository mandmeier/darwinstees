import * as api from '../api';
import store from '../../state/store';
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js'




export const resetShop = () => async dispatch => {
    dispatch({type: "RESET_SHOP"}) 
}

export const processOrder = (orderData, stripe, elements) => async dispatch => {

    try {

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        })

        const { data } = await api.createPrintOrder(orderData)

        var orderId = data || undefined

        if(!error) {
            try {
                const {id} = paymentMethod
                const {data} = await api.sendPayment(id, orderId, orderData)
                console.log("Payment response")
                console.log(data)
                //dispatch({type: "PAYMENT_SUCCESS"}) 

            } catch (error) {
                const message = error.response.data.message
                console.log("Payment error")
                console.log(message)
                throw {message}
                //dispatch({type: "PAYMENT_ERROR", payload: message}) 
                
            }
        } else {
            console.log("Payment Method error")
            console.log(error.message)
            throw error.message
        }

        console.log("SUCCESS AT LAST!")
        dispatch({type: "ORDER_SUCCESS", payload: orderId}) 
        
    } catch (error) {
        console.log("ORDER ERROR !!!")

        console.log("BAD REQUEST")
        console.log(error)

        var message = "an unknown error occurred"
        if(error.message !== undefined) {
            message = error.message
        } 
        if(error.response.data.message !== undefined){
            message = error.response.data.message
        } 

        if (orderId !== undefined) {
            console.log(orderId)
        }


        //const message = error.response.data.message
        dispatch({type: "ORDER_ERROR", payload: message}) 

    }

}



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
  dispatch({type: "REMOVE_ITEM", payload: itemId})
}

