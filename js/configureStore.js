import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createLogicMiddleware } from 'redux-logic';

import rootReducer from './rootReducer';
import arrLogic from './rootLogic';

// import config from './config';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['s']
};

const logicMiddleware = createLogicMiddleware(arrLogic, {});

const middlewares = [logicMiddleware];

export default function configureStore(preloadedState) {
  const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'Test',
      realtime: true,
      hostname: 'localhost',
      port: 5678,
    })
    : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
  );

  const pReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(pReducer, enhancer);

  const pStore = persistStore(
    store
  );

  // pStore.purge()

  // if (!config.persistStore) pStore.purge();

  return { store, pStore };
}
