import { all } from 'redux-saga/effects';
import { newsSaga } from './ducks/news/sagas';

export default function* rootSaga() {
    yield all([
        newsSaga()
    ]);
}
