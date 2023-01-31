import {
  ADD_COLOR,
  DELETE_COLOR,
  GET_COLOR_LIST,
  GET_ONE_COLOR,
  UPDATE_COLOR,
} from "../actions/colorActions";
import { color, colors } from "../initials/colorInitials";
const initialvales = {
  color,
  colors,
};
export default function colorReducer(state = initialvales, { type, payload }) {
  switch (type) {
    case GET_COLOR_LIST:
      return {
        ...state,
        colors: payload,
      };
    case GET_ONE_COLOR:
      return {
        ...state,
        color: payload,
      };
    case ADD_COLOR:
      return {
        ...state,
        colors: [...state.colors],
      };
    case DELETE_COLOR:
      return {
        ...state,
        colors: [...state.colors.filter((x) => x.colorId !== payload)],
      };
    case UPDATE_COLOR:
      return {
        ...state,
        colors: [
          ...state.colors.filter((x) => x.colorId !== payload.colorId),
          payload,
        ],
      };
    default:
      return {
        ...state,
      };
  }
}
