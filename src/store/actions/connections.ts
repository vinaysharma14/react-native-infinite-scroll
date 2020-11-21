import {
  ConnectionsState,
  FetchConnectionsReqAction,
  FetchConnectionsErrAction,
  FetchConnectionsSuccessAction,
  SearchConnectionsReqAction,
  SearchConnectionsErrAction,
  SearchConnectionsSuccessAction,
} from '../types/connections';

// fetch request
const fetchConnectionsReqAction = (
  limit: FetchConnectionsReqAction['payload']['limit'],
): FetchConnectionsReqAction => ({
  type: 'connections/fetchReq',
  payload: { limit },
});

// fetch error
const fetchConnectionsErrAction = (
  fetchErrMsg: string,
): FetchConnectionsErrAction => ({
  type: 'connections/fetchErr',
  payload: { fetchErrMsg },
});

// fetch success
const fetchConnectionsSuccessAction = (
  connections: ConnectionsState['connections'],
): FetchConnectionsSuccessAction => ({
  type: 'connections/fetchSuccess',
  payload: { connections },
});

// search request
const searchConnectionsReqAction = (
  query: string,
  mockData: ConnectionsState['connections'],
): SearchConnectionsReqAction => ({
  type: 'connections/searchReq',
  payload: { query, mockData },
});

// search error
const searchConnectionsErrAction = (
  searchErrMsg: string,
): SearchConnectionsErrAction => ({
  type: 'connections/searchErr',
  payload: { searchErrMsg },
});

// search success
const searchConnectionsSuccessAction = (
  searchResults: ConnectionsState['searchResults'],
): SearchConnectionsSuccessAction => ({
  type: 'connections/fetchSuccess',
  payload: { searchResults },
});

export {
  fetchConnectionsReqAction,
  fetchConnectionsErrAction,
  fetchConnectionsSuccessAction,
  searchConnectionsReqAction,
  searchConnectionsErrAction,
  searchConnectionsSuccessAction,
};
