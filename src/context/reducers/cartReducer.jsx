import { setTienditaFelizCart } from "../../utils/utils";
import { CART_ACTIONS } from "../actions/cartAction";

export const cartInitialState = {
  cart: JSON.parse(window.localStorage.getItem('tienditaFelizCart')) ?? []
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      if (state.cart.find((element => element.id === action.payload.id)) === undefined) {
        const newState = {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
        setTienditaFelizCart(newState.cart);
        return newState;
      } else {
        const newState = {
          ...state,
          cart: state.cart.map(element => element.id !== action.payload.id ? element : { ...element, quantity: element.quantity + 1 })
        };
        setTienditaFelizCart(newState.cart);
        return newState;
      }
    }
    case CART_ACTIONS.REMOVE_FROM_CART: {
      const newState = {
        ...state,
        cart: state.cart.filter(element => element.id !== action.payload)
      };
      setTienditaFelizCart(newState.cart);
      return newState;
    }
    default:
      break;
  }

  return state;
};