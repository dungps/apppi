import { AsyncStorage } from 'react-native';
import { SAVE_USER_INFO } from '@src/actions/key';

const INITIAL_STATE = {
    logged: false,
    username: '',
    avatar_url: '',
    name: '',
    age: 0,
    gender: 'male',
    verify_key: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_USER_INFO:
            return { ...action.payload };
        default: 
            //const user = await AsyncStorage.getItem('@user:key');
            console.log(state);
            return state;
    }
};
