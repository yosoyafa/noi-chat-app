import { combineReducers } from 'redux';

import socketReducer from './socketReducer';
import userReducer from './userReducer';

const allReducer = combineReducers({
    socket: socketReducer,
    user: userReducer
});

export default allReducer;