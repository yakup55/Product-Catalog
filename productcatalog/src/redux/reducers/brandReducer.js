import {
  ADD_BRAND,
  DELETE_BRAND,
  GET_BRAND_LIST,
  GET_ONE_BRAND,
  UPDATE_BRAND,
} from "../actions/brandActions";
import { brand, brands } from "../initials/brandInitials";
const initialvales = {
  brand,
  brands,
};
export default function brandReducer(state = initialvales, { type, payload }) {
  switch (type) {
    case GET_ONE_BRAND:
      return {
        ...state,
        brand: payload,
      };
    case GET_BRAND_LIST:
      return {
        ...state,
        brands: payload,
      };
    case ADD_BRAND:
      return {
        ...state,
        brands: [...state.brands, payload],
      };
    case DELETE_BRAND:
      return {
        ...state,
        brands: state.brands.filter((x) => x.brandId !== payload),
      };
    case UPDATE_BRAND:
      return {
        ...state,
        brands: [
          ...state.brands.filter((x) => x.brandId !== payload.brandId),
          payload,
        ],
      };
    default:
      return {
        ...state,
      };
  }
}
