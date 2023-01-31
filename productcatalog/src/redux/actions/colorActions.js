import ColorService from "../../services/colorService";

export const GET_ONE_COLOR = "GET_ONE_COLOR";
export const GET_COLOR_LIST = "GET_COLOR_LIST";
export const ADD_COLOR = "ADD_COLOR";
export const DELETE_COLOR = "DELETE_COLOR";
export const UPDATE_COLOR = "UPDATE_COLOR";

const colorService = new ColorService();

export function getColorList() {
  return function (dispacth) {
    colorService
      .getColorList()
      .then((resp) => dispacth({ type: GET_COLOR_LIST, payload: resp }));
  };
}
export function getOneColor(id) {
  return function (dispacth) {
    colorService
      .getOneColor(id)
      .then((resp) => dispacth({ type: GET_ONE_COLOR, payload: resp }));
  };
}
export function addColor(color) {
  return function (dispacth) {
    colorService
      .addColor(color)
      .then((resp) => dispacth({ type: ADD_COLOR, payload: resp }));
  };
}
export function deleteColor(id) {
  return function (dispacth) {
    colorService
      .deleteColor(id)
      .then((resp) => dispacth({ type: DELETE_COLOR, payload: id }));
  };
}
export function updateColor(id, color) {
  return function (dispacth) {
    colorService
      .updateColor(id, color)
      .then((resp) => dispacth({ type: UPDATE_COLOR, payload: resp }));
  };
}
