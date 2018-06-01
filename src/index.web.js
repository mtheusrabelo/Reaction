import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import './web/index.css';
import i18n from './web/i18n';
import configureStore from './app/store';

import App from './web/components/App';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
    });
}

const store = configureStore({});

render(
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </Provider>,
    document.getElementById('app'),
);
