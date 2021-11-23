import {LoadingState, NewsState} from "./contracts/state";
import {
    FetchNewsTypes,
    NewsActionsType,
    SetNewsLoadingStateTypes,
    SetNewsTypes,
} from './contracts/actionTypes'

/* comment */

export const SetNews = (payload: NewsState):SetNewsTypes => ({
    type: NewsActionsType.SET_NEWS,
    payload
});

export const FetchNews = ():FetchNewsTypes => ({
    type: NewsActionsType.FETCH_NEWS
});

export const SetNewsLoadingState = (payload: LoadingState):SetNewsLoadingStateTypes => ({
    type: NewsActionsType.SET_LOADING_STATE,
    payload
});
