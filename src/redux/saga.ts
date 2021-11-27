import { all } from 'redux-saga/effects';
import { newsSaga } from './ducks/news/sagas';
import { articlesSaga } from './ducks/articles/sagas';
import { commentSaga } from './ducks/comment/sagas';
import { searchSaga } from './ducks/search/sagas';

export default function* rootSaga() {
    yield all([
        newsSaga(),
        articlesSaga(),
        commentSaga(),
        searchSaga()
    ]);
}
