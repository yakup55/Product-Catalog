import { detail, details } from "../initials/detailInitials";
import {
  ADD_DETAIL,
  DELETE_DETAIL,
  GET_DETAIL_LIST,
  GET_ONE_DETAIL,
  UPDATE_DETAIL,
} from "../actions/detailActions";
const initialvales = {
  detail,
  details,
};

export default function detailReducer(state = initialvales, { type, payload }) {
  switch (type) {
    case GET_DETAIL_LIST:
      return {
        ...state,
        details: payload,
      };
    case GET_ONE_DETAIL:
      return {
        ...state,
        detail: payload,
      };
    case ADD_DETAIL:
      return {
        ...state,
        details: [...state.details],
      };
    case DELETE_DETAIL:
      return {
        ...state,
        details: [...state.details.filter((x) => x.detailId !== payload)],
      };
    case UPDATE_DETAIL:
      return {
        ...state,
        details: [
          ...state.details.filter((x) => x.detailId !== payload.detailId),
          payload,
        ],
      };
    default:
      return {
        ...state,
      };
  }
}
