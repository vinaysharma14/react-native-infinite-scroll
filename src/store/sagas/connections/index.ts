import { takeLatest, put, all, delay } from 'redux-saga/effects';

import { fetchConnections } from '../../../services';

import {
  ACTION_TYPES,
  FetchConnectionsReqAction,
  SearchConnectionsReqAction,
} from '../../types/connections';

import {
  fetchConnectionsSuccessAction,
  fetchConnectionsErrAction,
  searchConnectionsErrAction,
  searchConnectionsSuccessAction,
} from '../../actions/connections';

import { Connection, ConnectionResponse } from '../../../types';

// fetching connections
function* fetchConnectionsGenerator(
  action: FetchConnectionsReqAction,
): Generator {
  const { limit } = action.payload;

  try {
    const response: ConnectionResponse = yield fetchConnections(limit);

    // map response to desired type in redux state
    const connections: Connection[] = response.results.map(
      ({ name, gender, cell, email, phone, dob, picture, location }) => ({
        cell,
        email,
        gender,
        phone,
        location,
        age: dob.age,
        dob: dob.date,
        image: picture.large,
        thumbnail: picture.medium,
        name: `${name.first} ${name.last}`,
      }),
    );

    yield put(fetchConnectionsSuccessAction(connections));
  } catch ({ message }) {
    yield put(fetchConnectionsErrAction(message));
  }
}

// searching connections
function* searchConnectionsGenerator(
  action: SearchConnectionsReqAction,
): Generator {
  const { query, mockData } = action.payload;

  try {
    // TODO: search algorithm with the query
    yield delay(2000);
    yield put(searchConnectionsSuccessAction(mockData?.slice(0, 5)));
  } catch ({ message }) {
    yield put(searchConnectionsErrAction(message));
  }
}

export function* fetchConnectionsSaga(): Generator {
  yield all([
    yield takeLatest(
      ACTION_TYPES.fetchConnectionsReq,
      fetchConnectionsGenerator,
    ),
    yield takeLatest(
      ACTION_TYPES.searchConnectionsReq,
      searchConnectionsGenerator,
    ),
  ]);
}
