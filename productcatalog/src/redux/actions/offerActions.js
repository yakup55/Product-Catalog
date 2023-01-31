import OfferService from "../../services/offerService";

export const GET_ONE_OFFER = "";
export const GET_OFFER_LIST = "";
export const ADD_OFFER = "";
export const UPDATE_OFFER = "";
export const DELETE_OFFER = "";
export const OFFER_PRODUCT = "OFFER_PRODUCT";
export const OFFER_DETAIL_LIST="OFFER_DETAIL_LIST"

const offerService = new OfferService();
export function getOneOffer(id) {
  return function (dispacth) {
    offerService
      .getOneOffer(id)
      .then((resp) => dispacth({ type: GET_ONE_OFFER, payload: resp }));
  };
}
export function getOfferList() {
  return function (dispacth) {
    offerService
      .getOfferList()
      .then((resp) => dispacth({ type: GET_OFFER_LIST, payload: resp }));
  };
}
export function addOffer(offer) {
  return function (dispacth) {
    offerService
      .addOffer(offer)
      .then((resp) => dispacth({ type: ADD_OFFER, payload: resp }));
  };
}
export function deleteOffer(id) {
  return function (dispacth) {
    offerService
      .deleteOffer(id)
      .then((resp) => dispacth({ type: DELETE_OFFER, payload: id }));
  };
}
export function updateOffer(id, offer) {
  return function (dispacth) {
    offerService
      .updateOffer(id, offer)
      .then((resp) => dispacth({ type: UPDATE_OFFER, payload: resp }));
  };
}
export function offerProduct(id){
  return function(dispacth){
    offerService.offerProduct(id).then((resp)=>dispacth({type:OFFER_PRODUCT,payload:resp}))
  }
}
export function offerDetailList(id){
  return function(dispacth){
    offerService.offerDetailList(id).then((resp)=>dispacth({type:OFFER_DETAIL_LIST,payload:resp}))
  }
}
