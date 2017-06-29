import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#23A9F5',
        justifyContent: 'center',
        alignItems: 'center'
    },

    formWrapper: {
        backgroundColor: 'white',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },

    textInput: {
        width: width * 0.7,
        paddingVertical: 8
    },

    title: {
        fontWeight: 'bold',
        fontSize: 20
    },

    formBlock: {
        alignSelf: 'stretch',
        marginVertical: 8
    },

    button: {
        padding: 8
    }
    //wrapper, textInput, label, formWrapper, button, title, formBlock
});
