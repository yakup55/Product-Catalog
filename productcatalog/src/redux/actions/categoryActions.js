import CategoryService from "../../services/categoryService";

export const GET_CATEGORY_LIST = "GET_CATEGORY_LIST";
export const GET_ONE_CATEGORY = "GET_ONE_CATEGORY";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";

const categoryService = new CategoryService();

export function getCategoryList() {
  return function (dispacth) {
    categoryService
      .getCategoryList()
      .then((resp) => dispacth({ type: GET_CATEGORY_LIST, payload: resp }));
  };
}
export function getOneCategory(id) {
  return function (dispacth) {
    categoryService
      .getOneCategory(id)
      .then((resp) => dispacth({ type: GET_ONE_CATEGORY, payload: resp }));
  };
}
export function addCategory(category) {
  return function (dispacth) {
    categoryService
      .addCategory(category)
      .then((resp) => dispacth({ type: ADD_CATEGORY, payload: resp }));
  };
}
export function deleteCategory(id) {
  return function (dispacth) {
    categoryService
      .deleteCategory(id)
      .then((resp) => dispacth({ type: DELETE_CATEGORY, payload: resp }));
  };
}
export function updateCategory(id, category) {
  return function (dispacth) {
    categoryService
      .updateCategory(id, category)
      .then((resp) => dispacth({ type: UPDATE_CATEGORY, payload: resp }));
  };
}
