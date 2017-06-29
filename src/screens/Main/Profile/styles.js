import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const imgSize = width / 3;

export default StyleSheet.create({
    wrapper: { 
        flex: 1, 
        backgroundColor: 'white' 
    },

    topWrapper: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 10 
    },

    avatar: { 
        width: imgSize, 
        height: imgSize, 
        borderRadius: imgSize / 2 
    },

    name: { 
        fontSize: 20, 
        marginTop: 10, 
        marginBottom: 5 
    },

    username: { 
        fontSize: 12, 
        color: 'gray' 
    },

    bottomWrapper: { 
        flex: 1, 
        padding: 10 
    }
});
