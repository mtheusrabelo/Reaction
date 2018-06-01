import { combineReducers } from 'redux';
import clickReducer from './clickReducer';

const rootReducer = combineReducers({
    clicks: clickReducer,
});

export default rootReducer;
