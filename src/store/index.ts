import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, combineReducers, createStore } from 'redux';

// import all the reducers
import { connectionsReducer } from './reducers';

// import all the sagas
import { fetchConnectionsSaga } from './sagas';

// combine all the reducers
const rootReducer = combineReducers({
  connectionsReducer,
  // fooReducer,
  // barReducer,
});

// create a root saga
export function* rootSaga() {
  yield all([
    fetchConnectionsSaga(),
    // fooSaga(),
    // barSaga(),
  ]);
}

// create a saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with root reducer and root saga
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// run the saga middle ware to listen to actions
sagaMiddleware.run(rootSaga);

// root reducer type
export type State = ReturnType<typeof rootReducer>;
