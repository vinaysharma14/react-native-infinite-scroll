// types actions
export const ACTION_TYPES = {
  fetchConnectionsReq: 'connections/fetchReq',
  fetchConnectionsErr: 'connections/fetchErr',
  fetchConnectionsSuccess: 'connections/fetchSuccess',
} as const;

// reducer state type
export interface ConnectionsState {
  connections?: [];
  fetchErrMsg?: String;
  fetchingConnections: Boolean;
}

// actions type defined with type and payload
export interface FetchConnectionsReqAction {
  type: typeof ACTION_TYPES.fetchConnectionsReq;
  payload: { limit: 50 | 100 | 150 };
}
export interface FetchConnectionsErrAction {
  type: typeof ACTION_TYPES.fetchConnectionsErr;
  payload: { fetchErrMsg: String };
}
export interface FetchConnectionsSuccessAction {
  type: typeof ACTION_TYPES.fetchConnectionsSuccess;
  payload: { connections: ConnectionsState['connections'] };
}

// union of all the actions in this reducer
export type ConnectionActions =
  | FetchConnectionsReqAction
  | FetchConnectionsErrAction
  | FetchConnectionsSuccessAction;
