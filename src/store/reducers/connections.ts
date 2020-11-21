import {
  ACTION_TYPES,
  ConnectionsState,
  ConnectionActions,
} from '../types/connections';

const initialState: ConnectionsState = {
  fetchErrMsg: undefined,
  connections: undefined,
  fetchingConnections: false,
  searchResults: undefined,
  searchingConnections: false,
  searchErrMsg: undefined,
};

export const connectionsReducer = (
  state = initialState,
  action: ConnectionActions,
): ConnectionsState => {
  switch (action.type) {
    // fetch connections API requested
    case ACTION_TYPES.fetchConnectionsReq: {
      return {
        ...state,
        fetchErrMsg: undefined,
        fetchingConnections: true,
      };
    }

    // fetch connections API request failed
    case ACTION_TYPES.fetchConnectionsErr: {
      const { fetchErrMsg } = action.payload;

      return {
        ...state,
        fetchErrMsg,
        fetchingConnections: false,
      };
    }

    // fetch connections API request succeeded
    case ACTION_TYPES.fetchConnectionsSuccess: {
      const { connections } = action.payload;

      return {
        ...state,
        fetchErrMsg: undefined,
        connections: state.connections?.length
          ? state.connections.concat(connections)
          : connections,
        fetchingConnections: false,
      };
    }

    // search connections API requested
    case ACTION_TYPES.searchConnectionsReq: {
      return {
        ...state,
        searchingConnections: true,
      };
    }

    // search connections API request failed
    case ACTION_TYPES.searchConnectionsErr: {
      const { searchErrMsg } = action.payload;

      return {
        ...state,
        searchErrMsg,
        fetchingConnections: false,
      };
    }

    // search connections API request succeeded
    case ACTION_TYPES.searchConnectionsSuccess: {
      const { searchResults } = action.payload;

      return {
        ...state,
        searchResults,
        fetchingConnections: false,
      };
    }

    default: {
      return state;
    }
  }
};
