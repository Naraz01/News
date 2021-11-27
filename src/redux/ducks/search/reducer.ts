import {SearchActionsType, SearchActions} from "./contracts/actionTypes";
import { LoadingState, SearchState} from "./contracts/state";

const initialNewsState: SearchState = {
    items: [],
    loadingState: LoadingState.NEVER,
};

export const searchReducer = (state = initialNewsState, action: SearchActions) => {
      switch (action.type) {
          case (SearchActionsType.SET_SEARCH) : {
              console.log('SET_SEARCH');
              return { ...state, items: action.payload, loadingState: LoadingState.LOADED };
           }
          case (SearchActionsType.FETCH_SEARCH) : {
              console.log('FETCH')
              return { ...state, items: [], loadingState: LoadingState.LOADING };
          }
          case (SearchActionsType.SET_LOADING_STATE) : {
              return { ...state,  loadingState: action.payload };
          }
          default : {
              return state
          }
      }
};
