import { ADD_TO_CART, REMOVE_FROM_CART } from "./action"
import data from '../Components/Data/Data.json'
const initialStore = {
  apartment: data,
  cart: []
}
export const reducer = (state = initialStore, action) => {
  if (action.type === ADD_TO_CART) {

    const apartment = state.apartment.find(item => item.id === parseInt(action.payload))
    const newApartment = { ...apartment, newId: new Date().getTime() }


    const newCart = [...state.cart, newApartment]
    return { ...state, cart: newCart }
  }
  if (action.type === REMOVE_FROM_CART) {
    const newCart = state.cart.filter(item => item.newId !== parseInt(action.payload))

    return { ...state, cart: newCart }
  }
  return state
}
