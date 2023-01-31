import thunkMiddleware from "redux-thunk"
import {applyMiddleware, createStore} from "redux"
import rootReducer from "./rootReducer"
import { composeWithDevTools } from "redux-devtools-extension"

export default function configureStore(preloadedState) {
    const middleware=[thunkMiddleware]
    const middlewareEnhancer=applyMiddleware(...middleware)     

    const enhancers=[middlewareEnhancer]
    const composedEnhancers=composeWithDevTools(...enhancers)
    const store=createStore(rootReducer,preloadedState,composedEnhancers)
    return store
}
