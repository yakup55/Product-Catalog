import AuthenticationService from "../../services/authenticationService";

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const LOGOUT = "LOGOUT";
const authenticationService = new AuthenticationService();
export function UserLogin(user) {
  return function (dispatch) {
    return dispatch({ type: LOGIN, payload: user });
  };
}
export function UserRegister(user) {
  return function (dispatch) {
    authenticationService
      .register(user)
      .then((resp) => dispatch({ type: REGISTER, payload: resp }));
  };
}
export function logOut() {
  return function (dispacth) {
    authenticationService
      .logOut()
      .then((resp) => dispacth({ type: LOGOUT, payload: resp }));
  };
}
