import { Cases } from "@mui/icons-material";
import {
  ADD_PRODUCT,
  BRAND_ID_LIST,
  CATEGORY_ID_LIST,
  DELETE_PRODUCT,
  GET_ONE_PRODUCT,
  GET_ONE_PRODUCT_DETAIL,
  GET_PRODUCT_LIST,
  OFFER_PRODUCT_FALSE,
  OFFER_PRODUCT_ISSOLD_FASLE,
  OFFER_PRODUCT_ISSOLD_TRUE,
  OFFER_PRODUCT_TRUE,
  OFFER_USER,
  UPDATE_PRODUCT,
} from "../actions/productActions";
import { product, products } from "../initials/productInitials";
const initialVales = {
  product,
  products,
};
export default function productReducer(
  state = initialVales,
  { type, payload }
) {
  switch (type) {
    case GET_ONE_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    case GET_PRODUCT_LIST:
      return {
        ...state,
        products: payload,
      };
    case GET_ONE_PRODUCT_DETAIL:
      return {
        ...state,
        product: payload,
      };
    case BRAND_ID_LIST:
      return {
        ...state,
        products: payload,
      };
    case CATEGORY_ID_LIST:
      return {
        ...state,
        products: payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: [...state.products.filter((x) => x.productId !== payload)],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter((x) => x.productId !== payload.productId),
          payload,
        ],
      };
    case OFFER_PRODUCT_FALSE:
      return {
        ...state,
        product: payload,
      };
    case OFFER_PRODUCT_TRUE:
      return {
        ...state,
        product: payload,
      };
    case OFFER_PRODUCT_ISSOLD_FASLE:
      return {
        ...state,
        product: payload,
      };
    case OFFER_PRODUCT_ISSOLD_TRUE:
      return {
        ...state,
        product: payload,
      };
    case OFFER_USER:
      return {
        ...state,
        products: payload,
      };
    default:
      return {
        ...state,
      };
  }
}
