import { applyMiddleware, compose, createStore } from "redux";
import { Reducers } from "./Reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewareList = [thunk, logger];
const enhancer = compose(applyMiddleware(...middlewareList));

export const store = createStore(Reducers, enhancer);
// export const store = createStore(Reducers, {}, applyMiddleware(thunk));
