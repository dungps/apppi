import React, { Component } from 'react';
import { View, Text, Button, Alert, AsyncStorage } from 'react-native';
import SocketIOClient from 'socket.io-client';
import { TabNavigator } from 'react-navigation';

import Profile from './Profile';
import View2 from './View2';
import View3 from './View3';
import View4 from './View4';


const routeConfigs = {
    profile: {
        screen: Profile
    },

    view2: {
        screen: View2
    },

    view3: {
        screen: View3
    },

    view4: {
        screen: View4
    },

};

const tabNavigatorConfig = {
    tabBarOptions: {
        style: { backgroundColor: '#2196F3' },
        labelStyle: { fontSize: 12 }
    }
};

export default TabNavigator(routeConfigs, tabNavigatorConfig);

// export default class Main extends Component {
//     constructor(props) {
//         super(props);

//         this.socket = SocketIOClient('http://192.168.8.117:3000');
//         this.socket.on('login-result', this.onReceiveResult.bind(this));
//     }

//     onReceiveResult(result) {
//         if (result.logged) {
//             this.props.navigation.navigate('checkin');
//         } else {
//             Alert.alert(
//                 'Error',
//                 'You are not logged in or your session has expired',
//                 [
//                     {
//                         text: 'OK',
//                         onPress: () => {}
//                     }
//                 ]
//             );
//         }
//     }


//     async onCheckinPressed() {
//         try {
//             const username = await AsyncStorage.getItem('@username:key');
//             const key = await AsyncStorage.getItem('@verify:key');
//             if (key && username) {
//                 console.log(key + "/" + username);
//                 this.socket.emit('login', { username, key });
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     render() {
//         return (
//             <View style={{ backgroundColor: 'blue', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>Main Screen</Text>
//                 <Button 
//                     title="Check in"
//                     onPress={this.onCheckinPressed.bind(this)}
//                 />
//             </View>
//         );
//     }
// }
