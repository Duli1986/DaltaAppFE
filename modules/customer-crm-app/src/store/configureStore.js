import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger, { LogLevel } from 'gef-ui-logging';
import { includes } from 'ramda';
import api from 'hugo2-ui-features/api';
import storage from 'hugo2-ui-features/storage';
import debouncedMiddleware from 'hugo2-ui-redux-form/middleware/debouncedMiddleware';
import rootReducer from '../reducers';
import pdsValidationMiddleware from './pdsValidationMiddleware';
import { routerMiddleware } from 'connected-react-router';

const logger = createLogger({
  level: LogLevel.DEBUG,
  name: 'fla-ui-app',
  collapsed: true,
});

const defaultMiddlewares = (history) => [
  debouncedMiddleware,
  routerMiddleware(history),
  api.middleware(),
  storage.middleware,
  thunk,
];

function configureStore(preloadedState, history) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    process.env.NODE_ENV === 'development'
      ? compose(applyMiddlewareWithDevTool(...defaultMiddlewares(history), logger))
      : applyMiddlewareWithLogger(...defaultMiddlewares(history))
  );

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

function applyMiddlewareWithDevTool(...middleware) {
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(...middleware));
  } else {
    return applyMiddleware(...middleware);
  }
}

function applyMiddlewareWithLogger(...middleware) {
  const shouldLog = includes('logger=true', window.location.search);
  if (shouldLog) {
    return applyMiddleware(...middleware, logger);
  }
  return applyMiddleware(...middleware);
}

export default configureStore;
