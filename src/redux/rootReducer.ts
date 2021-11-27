import { combineReducers } from "redux";
import { newsReducer } from './ducks/news/reducer'
import { articleReducer } from './ducks/articles/reducer'
import { commentReducer } from "./ducks/comment/reducer";
import { searchReducer } from "./ducks/search/reducer";

export const rootReducer = combineReducers({
    news: newsReducer,
    article: articleReducer,
    comment: commentReducer,
    search: searchReducer
});
