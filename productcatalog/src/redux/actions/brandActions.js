import BrandService from "../../services/brandService";
export const GET_ONE_BRAND = "GET_ONE_BRAND";
export const ADD_BRAND = "ADD_BRAND";
export const DELETE_BRAND = "DELETE_BRAND";
export const UPDATE_BRAND = "UPDATE_BRAND";
export const GET_BRAND_LIST = "GET_BRAND_LIST";

const brandService = new BrandService();

export function getBrandList() {
  return function (dispatch) {
    brandService
      .getBrandList()
      .then((resp) => dispatch({ type: GET_BRAND_LIST, payload: resp }));
  };
}
export function getOneBrand(id) {
  return function (dispatch) {
    brandService
      .getOneBrand(id)
      .then((resp) => dispatch({ type: GET_ONE_BRAND, payload: resp }));
  };
}
export function addBrand(brand) {
  return function (dispatch) {
    brandService
      .addBrand(brand)
      .then((resp) => dispatch({ type: ADD_BRAND, payload: resp }));
  };
}
export function deleteBrand(id) {
  return function (dispatch) {
    brandService
      .deleteBrand(id)
      .then((resp) => dispatch({ type: DELETE_BRAND, payload: id }));
  };
}
export function updateBrand(id, brand) {
  return function (dispatch) {
    brandService
      .updateBrand(id, brand)
      .then((resp) => dispatch({ type: UPDATE_BRAND, payload: resp }));
  };
}
