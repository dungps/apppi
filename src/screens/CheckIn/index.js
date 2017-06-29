import React, { Component } from 'react';
import { Alert, AsyncStorage } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { connect } from 'react-redux';

class CheckIn extends Component {
    constructor(props) {
        super(props);

        this.props.socket.on('checkin-result', this.onReceiveResult.bind(this));
    }

    onReceiveResult(result) {
        console.log(result);
        Alert.alert(
            result.title,
            result.message,
            [{
                text: 'OK', 
                onPress: () => {
                    this.props.navigation.navigate('main', { result: result.success });
                }
            }]
        );
    }

    render() {
        return (
            <QRCodeScanner 
               onRead={(e) => {
                    this.props.socket.emit('scan-qr', { username: 'hungps', key: e.data });
                }}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    socket: state.socketio 
});

export default connect(mapStateToProps)(CheckIn);
