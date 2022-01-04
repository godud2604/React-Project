import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// 새로고침시 redux 유지
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import reducers from './redux/reducers';
import App from './App';

const browserHistory = createBrowserHistory();
const store = createStore(reducers, applyMiddleware(thunk));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);