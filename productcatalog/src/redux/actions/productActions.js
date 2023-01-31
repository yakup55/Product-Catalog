import ProductService from "../../services/productService";
export const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
export const BRAND_ID_LIST = "BRAND_ID_LIST";
export const CATEGORY_ID_LIST = "CATEGORY_ID_LIST";
export const GET_ONE_PRODUCT_DETAIL = "GET_ONE_PRODUCT_DETAIL";
export const OFFER_PRODUCT_FALSE = "OFFER_PRODUCT_FALSE";
export const OFFER_PRODUCT_TRUE = "OFFER_PRODUCT_TRUE";
export const OFFER_PRODUCT_ISSOLD_TRUE = "OFFER_PRODUCT_ISSOLD_TRUE";
export const OFFER_PRODUCT_ISSOLD_FASLE = "OFFER_PRODUCT_ISSOLD_FASLE";
export const OFFER_USER = "OFFER_USER";

const productService = new ProductService();
export function getOneProduct(id) {
  return function (dispacth) {
    productService
      .getOneProduct(id)
      .then((resp) => dispacth({ type: GET_ONE_PRODUCT, payload: resp }));
  };
}
export function getProductList() {
  return function (dispacth) {
    productService
      .getProductList()
      .then((resp) => dispacth({ type: GET_PRODUCT_LIST, payload: resp }));
  };
}
export function addProduct(product) {
  return function (dispacth) {
    productService
      .addProduct(product)
      .then((resp) => dispacth({ type: ADD_PRODUCT, payload: resp }));
  };
}
export function deleteProduct(id) {
  return function (dispacth) {
    productService
      .deleteProduct(id)
      .then((resp) => dispacth({ type: DELETE_PRODUCT, payload: id }));
  };
}
export function updateProduct(id, product) {
  return function (dispacth) {
    productService
      .updateProduct(id, product)
      .then((resp) => dispacth({ type: UPDATE_PRODUCT, payload: resp }));
  };
}
export function brandIdList(id) {
  return function (dispacth) {
    productService
      .brandIdList(id)
      .then((resp) => dispacth({ type: BRAND_ID_LIST, payload: resp }));
  };
}
export function categoryIdList(id) {
  return function (dispacth) {
    productService
      .categoryIdList(id)
      .then((resp) => dispacth({ type: CATEGORY_ID_LIST, payload: resp }));
  };
}
export function getOneProductDetail(id) {
  return function (dispacth) {
    productService
      .getOneProductDetail(id)
      .then((resp) =>
        dispacth({ type: GET_ONE_PRODUCT_DETAIL, payload: resp })
      );
  };
}
export function offerProductFalse(id) {
  return function (dispacth) {
    productService
      .offerProductfalse(id)
      .then((resp) => dispacth({ type: OFFER_PRODUCT_FALSE, payload: resp }));
  };
}
export function offerProductTrue(id) {
  return function (dispacth) {
    productService
      .offerProducttrue(id)
      .then((resp) => dispacth({ type: OFFER_PRODUCT_TRUE, payload: resp }));
  };
}
export function offerProductIsSoldFalse(id) {
  return function (dispacth) {
    productService
      .offerProductIsSoldFalse(id)
      .then((resp) =>
        dispacth({ type: OFFER_PRODUCT_ISSOLD_FASLE, payload: resp })
      );
  };
}
export function offerProductIsSoldTrue(id) {
  return function (dispacth) {
    productService
      .offerProductIsSoldTrue(id)
      .then((resp) =>
        dispacth({ type: OFFER_PRODUCT_ISSOLD_TRUE, payload: resp })
      );
  };
}
export function offerUser(id) {
  return function (dispacth) {
    productService
      .offerUser(id)
      .then((resp) => dispacth({ type: OFFER_USER, payload: resp }));
  };
}
