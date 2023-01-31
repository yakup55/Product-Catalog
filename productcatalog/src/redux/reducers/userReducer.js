import { LOGIN, LOGOUT, REGISTER } from "../actions/userActions";
import { user } from "../initials/userInitials";
const initialvales = {
  user,
};
export default function userReducer(state = initialvales, { type, payload }) {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: {
          ...payload,
        },
      };
    case REGISTER:
      return {
        ...state,
        user: [...state.user],
      };
    case LOGOUT:
      return {
        ...state,
        user: payload,
      };

    default:
      return { ...state };
  }
}
