import { StackNavigator } from 'react-navigation';
import { Login, Main, CheckIn, Splash } from './screens';

const routeConfigs = {
    splash: {
        screen: Splash
    },
    login: {
        screen: Login
    },
    main: {
        screen: Main
    },
    checkin: {
        screen: CheckIn
    }
};

const stackNavigatorConfig = {
    headerMode: 'none'
};

export default StackNavigator(routeConfigs, stackNavigatorConfig);
