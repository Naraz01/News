export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface Writer {
    userName: string,
    avatarUrl: string,
    userId: number
    companyId: number
}
export interface Search {
    id: number,
    title: string,
    text: string,
    date: string,
    time: string,
    writer: Writer,
    companies: boolean,
    person: boolean,
    personId: number,
    saved: Array<number>,
    likes: Array<number>
    comments?: any,
}

export interface SearchState {
    items: Search[];
    loadingState: LoadingState;
}
