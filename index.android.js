import React from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from './src/reducers';
import App from './src/App';

const Root = () => {
    const store = autoRehydrate()(
        applyMiddleware(ReduxThunk)(createStore)
    )(reducers);

    persistStore(store, { storage: AsyncStorage }, () => {
        console.log('restored');
    });

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent('AppPi', () => Root);
