import { focusManager } from "react-query";
import UsingStatusService from "../../services/usingStatusService";

export const GET_USING_STATUS_LIST = "GET_USING_STATUS_LIST";
export const ADD_USING_STATUS = "ADD_USING_STATUS";
export const UPDATE_USING_STATUS = "UPDATE_USING_STATUS";
export const DELETE_USING_STATUS = "DELETE_USING_STATUS";
export const GET_ONE_USING_STATUS = "GET_ONE_USING_STATUS";

const usingStatusService = new UsingStatusService();
export function getOneUsingStatus(id) {
  return function (dispacth) {
    usingStatusService
      .getOneUsingStatus(id)
      .then((resp) => dispacth({ type: GET_ONE_USING_STATUS, payload: resp }));
  };
}
export function getUsingStatusList() {
  return function (dispacth) {
    usingStatusService
      .getUsingStatusList()
      .then((resp) => dispacth({ type: GET_USING_STATUS_LIST, payload: resp }));
  };
}
export function addUsingStatus(using) {
  return function (dispacth) {
    usingStatusService
      .addUsingStatus(using)
      .then((resp) => dispacth({ type: ADD_USING_STATUS, payload: resp }));
  };
}
export function updateUsingStatus(id, using) {
  return function (dispacth) {
    usingStatusService
      .updateUsingStatus(id, using)
      .then((resp) => dispacth({ type: UPDATE_USING_STATUS, payload: resp }));
  };
}
export function deleteUsingStatus(id) {
  return function (dispacth) {
    usingStatusService
      .deleteUsingStatus(id)
      .then((resp) => dispacth({ type: DELETE_USING_STATUS, payload: resp }));
  };
}
