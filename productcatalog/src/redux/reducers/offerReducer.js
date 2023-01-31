import {
  ADD_OFFER,
  DELETE_OFFER,
  GET_OFFER_LIST,
  GET_ONE_OFFER,
  OFFER_DETAIL_LIST,
  OFFER_PRODUCT,
  UPDATE_OFFER,
} from "../actions/offerActions";
import { offer, offers } from "../initials/offerInitials";
const initialvales = {
  offer,
  offers,
};
export default function offerReducer(state = initialvales, { type, payload }) {
  switch (type) {
    case GET_OFFER_LIST:
      return {
        ...state,
        offers: payload,
      };
    case GET_ONE_OFFER:
      return {
        ...state,
        offer: payload,
      };
    case ADD_OFFER:
      return {
        ...state,
        offers: [...state.offers],
      };
    case DELETE_OFFER:
      return {
        ...state,
        offers: [...state.offers.filter((x) => x.offerId !== payload)],
      };
    case UPDATE_OFFER:
      return {
        ...state,
        offers: [
          ...state.offers.filter((x) => x.offerId !== payload.offerId),
          payload,
        ],
      };
    case OFFER_PRODUCT:
      return {
        ...state,
        offers: payload,
      };
    case OFFER_DETAIL_LIST:
      return {
        ...state,
        offers: payload,
      };
    default:
      return {
        ...state,
      };
  }
}
