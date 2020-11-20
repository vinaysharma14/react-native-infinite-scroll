import { takeLatest, delay, put } from 'redux-saga/effects';

import {
  ACTION_TYPES,
  FetchConnectionsReqAction,
} from '../../types/connections';

import {
  fetchConnectionsSuccessAction,
  fetchConnectionsErrAction,
} from '../../actions/connections';

function* fetchConnectionsGenerator(
  action: FetchConnectionsReqAction,
): Generator {
  const { limit } = action.payload;

  try {
    // TODO: replace delay by actual API
    yield delay(1000);
    yield put(fetchConnectionsSuccessAction([]));
  } catch ({ message }) {
    yield put(fetchConnectionsErrAction(message));
  }
}

export function* fetchConnectionsSaga(): Generator {
  yield takeLatest(ACTION_TYPES.fetchConnectionsReq, fetchConnectionsGenerator);
}
