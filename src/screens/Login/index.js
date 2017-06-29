import React, { Component } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { saveUserInfo } from '@src/actions';
import md5 from 'react-native-md5';

import styles from './styles';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.props.socket.on('login-result', this.onReceiveLogin.bind(this));
    }

    onReceiveLogin = (result) => {
        if (result.logged) {
            //console.log(result);
            this.props.saveUserInfo(result);
            this.props.navigation.navigate('main');
        } else {
            Alert.alert('Error', result.message, 
                [{
                    text: 'OK',
                    onPress: () => this.setState({ password: '' })
                }]
            );
        }
    }

    onLoginPressed = () => {
        //this.props.navigation.navigate('main');
        let username = this.state.username;
        let password = this.state.password;

        if (username === '' || password === '') {
            Alert.alert(
                'Error',
                'Username and Password cannot be empty!',
                [{
                    text: 'OK', 
                    onPress: () => {}
                }]
            );
        } else {
            password = md5.hex_md5(md5.hex_md5(password));
            this.props.socket.emit('login', { username, password });
        }
    }

    render() {
        const { 
            wrapper, 
            textInput, 
            label, 
            formWrapper, 
            button, 
            title, 
            formBlock 
        } = styles;

        return (
            <View style={wrapper}>
                <View style={formWrapper}>
                    <Text style={title}>LOGIN</Text>
                    <View style={formBlock}>
                        <Text style={label}>Username</Text>
                        <TextInput 
                            style={textInput} 
                            onChangeText={(text) => this.setState({ username: text })}
                            value={this.state.username}
                            onSubmitEditing={(e) => { 
                                this.refs.passwordInput.focus(); 
                            }}
                            autoFocus
                        />
                    </View>
                    <View style={formBlock}>
                        <Text style={label}>Password</Text>
                        <TextInput 
                            ref="passwordInput"
                            style={textInput}
                            onChangeText={(text) => this.setState({ password: text })}
                            value={this.state.password}
                            
                        />
                    </View>
                    <View style={formBlock}>
                        <Button 
                            title="Login"
                            onPress={this.onLoginPressed.bind(this)}
                            style={button}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    socket: state.socketio
});

export default connect(mapStateToProps, { saveUserInfo })(Login);
