import { combineReducers } from "redux";
import brandReducer from "../reducers/brandReducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import colorReducer from "./colorReducer";
import { appReducer } from "./appReducer";
import cartReducer from "./cartReducer";
import usingStatusReducer from "./usingStatusReducer";
import offerReducer from "./offerReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
  brand: brandReducer,
  product: productReducer,
  category: categoryReducer,
  color: colorReducer,
  app: appReducer,
  cart: cartReducer,
  using: usingStatusReducer,
  offer: offerReducer,
  user:userReducer
});

export default rootReducer;
