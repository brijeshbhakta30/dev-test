import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import AppReducer from './modules';
import services from './modules/services';
import Reactotron from './reactotronConfig';

export const initializeStore = () => {
  const persistConfig = {
    timeout: 6000,
    key: 'root',
    storage,
    whitelist: ['user'],
  };
  const persistedReducer = persistReducer(persistConfig, AppReducer);
  const enhancers = [Reactotron.createEnhancer()];
  const middleware = [thunk.withExtraArgument(services)];
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );
  const store = createStore(
    persistedReducer,
    composedEnhancers,
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

export default initializeStore;
