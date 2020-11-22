import { API } from '../constants';
import { FetchConnectionsReqAction } from '../store/types/connections';

export function* fetchConnections(
  limit: FetchConnectionsReqAction['payload']['limit'],
): Generator {
  const url = API.replace('{limit}', String(limit));
  const response: any = yield fetch(url, { method: 'GET' });

  if (!response.ok) {
    const errorMessage: string = yield response.json();
    throw new Error(errorMessage);
  }

  return yield response.json();
}
