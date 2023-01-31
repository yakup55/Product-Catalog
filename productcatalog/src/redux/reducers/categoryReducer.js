import {
  GET_CATEGORY_LIST,
  GET_ONE_CATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
} from "../actions/categoryActions";
import { category, categories } from "../initials/categoryInitials";
const initialvales = {
  category,
  categories,
};
export default function categoryReducer(
  state = initialvales,
  { type, payload }
) {
  switch (type) {
    case GET_CATEGORY_LIST:
      return {
        ...state,
        categories: payload,
      };
    case GET_ONE_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories],
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: [
          ...state.categories.filter((x) => x.categoryId !== payload),
        ],
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        categories: [
          ...state.categories.filter(
            (x) => x.categoryId !== payload.categoryId
          ),
          payload,
        ],
      };
    default:
      return {
        ...state,
      };
  }
}
