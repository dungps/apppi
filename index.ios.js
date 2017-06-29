import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import App from './src/App';

const Root = () => {
    const store = createStore(reducers);
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent('AppPi', () => Root);
