import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

const initalState = {};

const middleware = [thunk];

const store = createStore(
        rootReducer,
        initalState, 
        //allows us to use multiple enhancers.
        compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
);

export default store;