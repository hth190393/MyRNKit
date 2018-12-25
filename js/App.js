import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppState } from './AppState';
import configureStore from './configureStore';

const { pStore, store } = configureStore();

export default class App extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={pStore}>
          <AppState />
        </PersistGate>
      </Provider>
    );
  }
}
