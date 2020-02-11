import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import reducer from './reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga);
