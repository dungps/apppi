import { 
    SAVE_USER_INFO, 
    CONNECT_TO_SERVER 
} from './key.js';

export const saveUserInfo = (user) => {
    return {
        type: SAVE_USER_INFO,
        payload: user
    };
};

export const connectToServer = (server) => {
    return {
        type: CONNECT_TO_SERVER,
        payload: server
    };
};

