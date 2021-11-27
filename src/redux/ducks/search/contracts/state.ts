import { News } from "../../news/contracts/state";

export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface SearchState {
    items: News[];
    loadingState: LoadingState;
}
