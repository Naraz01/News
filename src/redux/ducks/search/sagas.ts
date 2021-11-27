import { takeLatest, put } from "@redux-saga/core/effects";
import { SetSearch, SetNewsLoadingState } from "./actionCreators";
import { LoadingState} from "./contracts/state";
import { SearchActionsType} from "./contracts/actionTypes";
import { SearchApi } from "../../../services/api/searchApi";
import * as Effects from "redux-saga/effects";

const call: any = Effects.call;

export function* fetchSearchRequest(payload:any):any {
    try {
        const items:any = yield call(SearchApi.fetchSearchApi, payload.payload);
        yield put(SetSearch(items));
    }
    catch (error) {
        console.log('error')
        yield put(SetNewsLoadingState(LoadingState.ERROR))
    }
}
export function* searchSaga() {
    yield takeLatest(SearchActionsType.FETCH_SEARCH, fetchSearchRequest);
}
