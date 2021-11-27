import { Action } from "redux";
import {LoadingState, SearchState} from "./state";

export enum SearchActionsType {
    SET_SEARCH = 'search/SET_SEARCH',
    FETCH_SEARCH = 'search/FETCH_SEARCH',
    SET_LOADING_STATE = 'search/SET_LOADING_STATE',
}

export interface SetSearchTypes extends Action<SearchActionsType> {
    type: SearchActionsType.SET_SEARCH;
    payload: SearchState;
}

export interface FetchSearchTypes extends Action<SearchActionsType> {
    type: SearchActionsType.FETCH_SEARCH;
    payload: any
}

export interface SetNewsLoadingStateTypes extends Action<SearchActionsType> {
    type: SearchActionsType.SET_LOADING_STATE;
    payload: LoadingState
}

export type SearchActions =
    | SetSearchTypes
    | FetchSearchTypes
    | SetNewsLoadingStateTypes;
