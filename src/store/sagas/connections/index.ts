import { takeLatest, put } from 'redux-saga/effects';

import { fetchConnections } from '../../../services';

import {
  ACTION_TYPES,
  FetchConnectionsReqAction,
} from '../../types/connections';

import {
  fetchConnectionsSuccessAction,
  fetchConnectionsErrAction,
} from '../../actions/connections';

import { Connection, ConnectionResponse } from '../../../types';

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

export function* fetchConnectionsSaga(): Generator {
  yield takeLatest(ACTION_TYPES.fetchConnectionsReq, fetchConnectionsGenerator);
}
