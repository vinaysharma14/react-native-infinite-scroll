import { Connection } from '../../types';

// types actions
export const ACTION_TYPES = {
  // fetching connections
  fetchConnectionsReq: 'connections/fetchReq',
  fetchConnectionsErr: 'connections/fetchErr',
  fetchConnectionsSuccess: 'connections/fetchSuccess',

  // searching connections
  searchConnectionsReq: 'connections/searchReq',
  searchConnectionsErr: 'connections/searchErr',
  searchConnectionsSuccess: 'connections/fetchSuccess',
} as const;

// reducer state type
export interface ConnectionsState {
  connections?: Connection[];
  fetchErrMsg?: string;
  fetchingConnections: boolean;
  searchErrMsg?: string;
  searchResults?: Connection[];
  searchingConnections: boolean;
}

// actions defined with type and payload for fetching
export interface FetchConnectionsReqAction {
  type: typeof ACTION_TYPES.fetchConnectionsReq;
  payload: { limit: 50 | 100 | 150 };
}
export interface FetchConnectionsErrAction {
  type: typeof ACTION_TYPES.fetchConnectionsErr;
  payload: { fetchErrMsg: string };
}
export interface FetchConnectionsSuccessAction {
  type: typeof ACTION_TYPES.fetchConnectionsSuccess;
  payload: { connections: ConnectionsState['connections'] };
}

// actions defined with type and payload for searching
export interface SearchConnectionsReqAction {
  type: typeof ACTION_TYPES.searchConnectionsReq;
  payload: { query: string; mockData: ConnectionsState['connections'] };
}
export interface SearchConnectionsErrAction {
  type: typeof ACTION_TYPES.searchConnectionsErr;
  payload: { searchErrMsg: string };
}
export interface SearchConnectionsSuccessAction {
  type: typeof ACTION_TYPES.searchConnectionsSuccess;
  payload: { searchResults: ConnectionsState['searchResults'] };
}

// union of all the actions in this reducer
export type ConnectionActions =
  | FetchConnectionsReqAction
  | FetchConnectionsErrAction
  | FetchConnectionsSuccessAction
  | SearchConnectionsReqAction
  | SearchConnectionsErrAction
  | SearchConnectionsSuccessAction;
