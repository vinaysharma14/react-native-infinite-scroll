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
    //* should be an actual API which returns search result
    //* for the time being using an algorithm to search
    //* query in whatever data is present in our app
    yield delay(2000);

    // convert entire data into an array of string which contains
    // following concatenated details of connections:
    // name, email, cell, city, state, country
    const stringifiedData = mockData?.map(
      ({ name, email, cell, location }) => ({
        // email has been kept as a primary key
        id: email,
        string: `${name} ${email} ${cell} ${location.city} ${location.country} ${location.state}`,
      }),
    );

    // filter out ID of all the connections which match the query
    const matches = stringifiedData
      ?.filter(({ string }) => string.includes(query))
      .map(({ id }) => id);

    // filter out all the connections whose email matches IDs from above
    const results = mockData?.filter(({ email }) => matches?.includes(email));

    // pass down results to be displayed in app
    yield put(searchConnectionsSuccessAction(results));

    //* search UX can be improved by allowing user to select properties
    //* it whishes to search by displaying them in
    //* breadcrumbs instead of hard coding
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
