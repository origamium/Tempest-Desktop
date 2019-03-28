import {applyMiddleware, createStore, Store} from "redux";
import createSagaMiddleware from 'redux-saga'
import {createLogger} from 'redux-logger'
import {rootReducer} from './reducers'
import {rootSaga} from './sagas'

const logger = createLogger({
    collapsed: true,
    duration: true,
});
const sagaMiddleware = createSagaMiddleware();

export const configureStore = (): Store => {
    return createStore(
        rootReducer,
        {},
        applyMiddleware(sagaMiddleware, logger)
    );
};

sagaMiddleware.run(rootSaga);
