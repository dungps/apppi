import SocketIOClient from 'socket.io-client';
import { CONNECT_TO_SERVER } from '@src/actions/key';

export default (state = {}, action) => {
    switch (action.type) {
        case CONNECT_TO_SERVER: 
            return SocketIOClient(action.payload);
        default:
            return state;
    }
};
