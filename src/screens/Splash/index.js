import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import { connect } from 'react-redux';

import { connectToServer } from '@src/actions';
import styles from './styles';


const { width } = Dimensions.get('window');
const LOGO = require('@src/assets/images/logo-white.png');

class Splash extends Component {
    componentWillMount = () => {
        this.props.connectToServer('http://10.0.0.91:3000');
    }

    componentDidMount = () => {
        const { navigation, user } = this.props;
        let screen = 'login';
        
        if (user && user.logged) {
            screen = 'main';   
        }
        
        setTimeout(() => {
            navigation.navigate(screen);
        }, 2000);
    }
    
    render() {
        const imgWidth = (width > 504) ? 252 : width / 3;
        const imgHeight = imgWidth * 1.07;

        return (
            <View style={styles.wrapper}>
                <Image 
                    source={LOGO} 
                    style={[styles.logo, { width: imgWidth, height: imgHeight }]}    
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, { connectToServer })(Splash);
