import { createContext, useReducer } from 'react';
import { CART_ACTIONS } from './actions/cartAction';
import { cartInitialState, cartReducer } from './reducers/cartReducer';

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = product => dispatch({
    type: CART_ACTIONS.ADD_TO_CART,
    payload: product
  });

  const removeFromCard = (id) => dispatch({
    type: CART_ACTIONS.REMOVE_FROM_CART,
    payload: id
  });

  return (
    <CartContext.Provider value={{
      cart: state.cart,
      addToCart,
      removeFromCard
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
