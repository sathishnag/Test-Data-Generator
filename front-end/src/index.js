import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import store from './Store/store';
import { BrowserRouter, Route, Link, browserHistory, IndexRoute } from 'react-router-dom'

ReactDOM.render(<Provider store={store}>
<App/>
</Provider>
, document.getElementById('root'));
registerServiceWorker();