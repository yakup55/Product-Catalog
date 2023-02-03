import DetailService from "../../services/detailService";
export const GET_DETAIL_LIST = "GET_DETAIL_LIST";
export const ADD_DETAIL = "ADD_DETAIL";
export const DELETE_DETAIL = "DELETE_DETAIL";
export const UPDATE_DETAIL = "UPDATE_DETAIL";
export const GET_ONE_DETAIL = "GET_ONE_DETAIL";

const detailService = new DetailService();
export function getDetailList() {
  return function (dispacth) {
    return detailService
      .getDetailList()
      .then((resp) => dispacth({ type: GET_DETAIL_LIST, payload: resp }));
  };
}
export function getOneDetail(id) {
  return function (dispacth) {
    detailService
      .getOneDetail(id)
      .then((resp) => dispacth({ type: GET_ONE_DETAIL, payload: resp }));
  };
}
export function addDetail(detail) {
  return function (dispacth) {
    detailService
      .addDetail(detail)
      .then((resp) => dispacth({ type: ADD_DETAIL, payload: resp }));
  };
}
export function deleteDetail(id) {
  return function (dispacth) {
    detailService
      .deleteDetail(id)
      .then((resp) => dispacth({ type: DELETE_DETAIL, payload: id }));
  };
}
export function updateDetail(detail, id) {
  return function (dispacth) {
    detailService
      .updateDetail(detail, id)
      .then((resp) => dispacth({ type: UPDATE_DETAIL, payload: resp }));
  };
}
