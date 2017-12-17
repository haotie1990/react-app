import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import AppContainer from './App.js';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

import store from './store.jsx'

let rootElement = document.getElementById('root')
render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    rootElement
)

registerServiceWorker();
