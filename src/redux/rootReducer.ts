import { combineReducers } from "redux";
import { newsReducer } from './ducks/news/reducer'

export const rootReducer = combineReducers({
    news: newsReducer,
});
