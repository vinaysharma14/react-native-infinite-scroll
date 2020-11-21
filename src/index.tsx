import React from 'react';
import { Provider } from 'react-redux';

import { Navigation } from './navigation';
import { store } from './store';

export default () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);
