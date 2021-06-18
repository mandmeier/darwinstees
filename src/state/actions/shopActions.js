import * as api from '../api';
import store from '../../state/store';

export const addToCart = (itemId, lineage, generation, layout, evoIds, qty) => async dispatch =>  {
  
  const cart = store.getState().shopState.cart
  // if cart already contains item, update qty
  const item = cart.find(item => item.itemId === itemId);
  console.log(item)
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
  dispatch({type: "EMPTY_CART"}) 
}

export const removeItem = (itemId) => async dispatch => {
  console.log("removeItem")
  console.log(itemId)
  dispatch({type: "REMOVE_ITEM", payload: itemId})
}

