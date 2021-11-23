import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import { rootReducer } from "./rootReducer";
import rootSaga from './saga'

import {NewsState} from './ducks/news/contracts/state'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
    news: NewsState;
};

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
