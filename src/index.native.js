import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './native/i18n';
import configureStore from './app/store';

import App from './native/components/App';

const store = configureStore({});

export default (
    <View>
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </Provider>
    </View>
);
