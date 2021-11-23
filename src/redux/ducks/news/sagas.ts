import { call, takeLatest, put } from "@redux-saga/core/effects";
import {NewsApi} from '../../../services/api/newsApi';
import { SetNews, SetNewsLoadingState } from "./actionCreators";
import {LoadingState} from "./contracts/state";
import {NewsActionsType} from "./contracts/actionTypes";

export function* fetchNewsRequest():any {
    try {
        const items = yield call(NewsApi.fetchNews);
        yield put(SetNews(items));
    }
    catch (error) {
        yield put(SetNewsLoadingState(LoadingState.ERROR))
    }
}
export function* newsSaga() {
    yield takeLatest(NewsActionsType.FETCH_NEWS, fetchNewsRequest);
}
