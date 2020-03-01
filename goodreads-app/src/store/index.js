import { createStore , applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from '../reducers'

const middleWare = [logger, thunk];

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleWare)
    )
);

export default store;
