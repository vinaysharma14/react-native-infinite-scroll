import {
  ACTION_TYPES,
  ConnectionsState,
  ConnectionActions,
} from '../types/connections';

const initialState: ConnectionsState = {
  fetchErrMsg: undefined,
  connections: undefined,
  fetchingConnections: false,
};

export const connectionsReducer = (
  state = initialState,
  action: ConnectionActions,
): ConnectionsState => {
  switch (action.type) {
    // connections API requested
    case ACTION_TYPES.fetchConnectionsReq: {
      return {
        ...state,
        fetchingConnections: true,
      };
    }

    // connections API request failed
    case ACTION_TYPES.fetchConnectionsErr: {
      const { fetchErrMsg } = action.payload;

      return {
        ...state,
        fetchErrMsg,
        fetchingConnections: false,
      };
    }

    // connections API request succeeded
    case ACTION_TYPES.fetchConnectionsSuccess: {
      const { connections } = action.payload;

      return {
        ...state,
        connections,
        fetchingConnections: false,
      };
    }

    default: {
      return state;
    }
  }
};
