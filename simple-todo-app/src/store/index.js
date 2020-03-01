import { createStore , applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import rootReducer from '../reducers'

const middleWare = [logger];

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleWare)
    )
);

export default store;
