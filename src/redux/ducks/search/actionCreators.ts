import {LoadingState, SearchState} from "./contracts/state";
import {
    FetchSearchTypes,
    SearchActionsType,
    SetNewsLoadingStateTypes,
    SetSearchTypes,
} from './contracts/actionTypes'

export const SetSearch = (payload: SearchState):SetSearchTypes => ({
    type: SearchActionsType.SET_SEARCH,
    payload
});

export const FetchSearch = (payload:any):FetchSearchTypes => ({
    type: SearchActionsType.FETCH_SEARCH,
    payload
});

export const SetNewsLoadingState = (payload: LoadingState):SetNewsLoadingStateTypes => ({
    type: SearchActionsType.SET_LOADING_STATE,
    payload
});

