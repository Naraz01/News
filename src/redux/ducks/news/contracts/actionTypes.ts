import { Action } from "redux";
import {LoadingState, NewsState} from "./state";

export enum NewsActionsType {
    SET_NEWS = 'news/SET_NEWS',
    FETCH_NEWS = 'news/FETCH_NEWS',
    SET_LOADING_STATE = 'news/SET_LOADING_STATE',
    ADD_COMMENT_NEWS = 'ADD_COMMENT_NEWS',
}

export interface AddCommentNewsTypes extends Action<NewsActionsType> {
    type: NewsActionsType.ADD_COMMENT_NEWS;
    payload: any
}

export interface SetNewsTypes extends Action<NewsActionsType> {
    type: NewsActionsType.SET_NEWS;
    payload: NewsState;
}

export interface FetchNewsTypes extends Action<NewsActionsType> {
    type: NewsActionsType.FETCH_NEWS;
}

export interface SetNewsLoadingStateTypes extends Action<NewsActionsType> {
    type: NewsActionsType.SET_LOADING_STATE;
    payload: LoadingState
}

export type NewsActions =
    | SetNewsTypes
    | FetchNewsTypes
    | SetNewsLoadingStateTypes
    | AddCommentNewsTypes;
