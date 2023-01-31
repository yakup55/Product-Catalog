import { ADD_TO_CART, DELETE_TO_CART } from "../actions/cartActions";
import { cart, carts } from "../initials/cartInitals";
const initialVales = {
  cart,
  carts,
};
export default function (state = initialVales, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.carts, payload],
      };
    case DELETE_TO_CART:
      return {
        ...state,
        carts: [...state.carts.filter((x) => x.productId !== payload)],
      };
    default:
      return {
        ...state,
      };
  }
}
