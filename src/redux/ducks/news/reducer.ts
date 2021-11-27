import {NewsActions, NewsActionsType} from "./contracts/actionTypes";
import { LoadingState, News, NewsState} from "./contracts/state";

const initialNewsState: NewsState = {
    items: [],
    loadingState: LoadingState.NEVER,
};

export const newsReducer = (state = initialNewsState, action: NewsActions) => {
      switch (action.type) {
          case (NewsActionsType.SET_NEWS) : {
              return { ...state, items: action.payload, loadingState: LoadingState.LOADED };
           }
          case (NewsActionsType.FETCH_NEWS) : {
              return { ...state, items: [], loadingState: LoadingState.LOADING };
          }
          case (NewsActionsType.SET_LOADING_STATE) : {
              return { ...state,  loadingState: action.payload };
          }
          case NewsActionsType.ADD_COMMENT_NEWS: {
            let addComment = state.items.map((item:News) => {
                if (item.id === action.payload.newsId) {
                    item.comments = [...item.comments, action.payload]
                }
                return item
            });
            return {...state}
        }
          default : {
              return state
          }
      }
};
