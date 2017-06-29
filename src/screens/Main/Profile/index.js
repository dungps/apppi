import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Button } from '@src/components';
import styles from './styles';

class Profile extends Component {
    render() {
        const { user, navigation } = this.props;
        console.log(user);
        const avatar = user.avatar_url 
                ? { uri: user.avatar_url } 
                : require('@src/assets/images/avatar-default.png');
        
        return (
            <View style={styles.wrapper}>
                <View style={styles.topWrapper}>
                    <Image 
                        source={avatar}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.username}>{user.username}</Text>
                </View>

                <View style={styles.bottomWrapper}>
                    <Button 
                        title="Check-in" 
                        onPress={() => { navigation.navigate('checkin'); }}
                    />
                    <Button 
                        title="Check-in" 
                        onPress={() => {}}
                    />
                    <Button 
                        title="Check-in" 
                        onPress={() => {}}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(Profile);
