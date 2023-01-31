import {
  ADD_USING_STATUS,
  DELETE_USING_STATUS,
  GET_ONE_USING_STATUS,
  GET_USING_STATUS_LIST,
  UPDATE_USING_STATUS,
} from "../actions/usingStatusActions";
import { using, usings } from "../initials/usingStatusInitials";
const initialValues = {
  using,
  usings,
};
export default function usingStatusReducer(
  state = initialValues,
  { type, payload }
) {
  switch (type) {
    case GET_ONE_USING_STATUS:
      return {
        ...state,
        using: payload,
      };
    case GET_USING_STATUS_LIST:
      return {
        ...state,
        usings: payload,
      };
    case ADD_USING_STATUS:
      return {
        ...state,
        usings: [...state.usings, payload],
      };
    case DELETE_USING_STATUS:
      return {
        ...state,
        usings: [...state.usings.filter((x) => x.usingStatusId !== null)],
      };
    case UPDATE_USING_STATUS:
      return {
        ...state,
        usings: [
          ...state.usings.filter(
            (x) => x.usingStatusId !== payload.usingStatusId
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
