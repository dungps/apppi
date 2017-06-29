import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const Button = ({ title, style, titleStyle, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.wrapper, style]}>
                <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#2196F3',
        justifyContent: 'center', 
        alignItems: 'center',
        margin: 8,
        padding: 10,
        borderRadius: 2
    },

    titleStyle: {
        color: 'white',
        fontWeight: 'bold'
    }
});
