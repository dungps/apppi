import { combineReducers } from 'redux';
import socketio from './socketio';
import user from './user';
import nav from './nav';

export default combineReducers({
    socketio,
    nav,
    user
});
