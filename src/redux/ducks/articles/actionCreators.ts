import {
    ArticleActionsType, EditLikeArticleTypes, EditPreservedArticleTypes, AddCommentArticleTypes,
    FetchArticleTypes,
    SetArticleLoadingStateTypes,
    SetArticleTypes
} from "./contracts/actionTypes";
import {articlesState, LoadingState} from "./contracts/state";

export const SetArticle = (payload: articlesState | any):SetArticleTypes => ({
    type: ArticleActionsType.SET_ARTICLE,
    payload,
});

export const FetchArticle = (payload: string):FetchArticleTypes => ({
    type: ArticleActionsType.FETCH_ARTICLE,
    payload
});

export const SetArticleLoading = (payload: LoadingState):SetArticleLoadingStateTypes => ({
    type: ArticleActionsType.SET_LOADING_ARTICLE,
    payload,
});
export const AddCommentArticle = (payload: any):AddCommentArticleTypes => ({
    type: ArticleActionsType.ADD_COMMENT_ARTICLE,
    payload,
});
