import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders learn react link', () => {
    <Provider store={store}>
      <App />
    </Provider>
});
