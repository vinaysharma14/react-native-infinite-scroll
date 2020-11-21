import {
  ConnectionsState,
  FetchConnectionsReqAction,
  FetchConnectionsErrAction,
  FetchConnectionsSuccessAction,
} from '../types/connections';

// request
const fetchConnectionsReqAction = (
  limit: FetchConnectionsReqAction['payload']['limit'],
): FetchConnectionsReqAction => ({
  type: 'connections/fetchReq',
  payload: { limit },
});

// error
const fetchConnectionsErrAction = (
  fetchErrMsg: String,
): FetchConnectionsErrAction => ({
  type: 'connections/fetchErr',
  payload: { fetchErrMsg },
});

// success
const fetchConnectionsSuccessAction = (
  connections: ConnectionsState['connections'],
): FetchConnectionsSuccessAction => ({
  type: 'connections/fetchSuccess',
  payload: { connections },
});

export {
  fetchConnectionsReqAction,
  fetchConnectionsErrAction,
  fetchConnectionsSuccessAction,
};
