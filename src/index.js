import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './app-navigator';
import { Processing } from './components/index';
import { initializeStore } from './redux/store';

const { store, persistor } = initializeStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
          <Processing />
        </PersistGate>
      </Provider>
    );
  }
}
