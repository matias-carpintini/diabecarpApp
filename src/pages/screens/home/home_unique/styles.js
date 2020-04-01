
import { DynamicStyleSheet, DynamicValue, useDynamicStyleSheet } from 'react-native-dark-mode'

export default dynamicStyles = new DynamicStyleSheet({
    container: {
        backgroundColor: new DynamicValue('#FFF', '#12121B'),
    },
    topusersText: {
        color: new DynamicValue('#000', '#FFF'),
        marginLeft: 0,
        marginTop: 30,
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold', marginTop: 25
    },
    newsText: {
        color: new DynamicValue('#000', '#FFF'),
        marginLeft: 0,
        marginTop: 10,
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold', marginTop: 25
    },
    popularText: {
        color: new DynamicValue('#000', '#FFF'),
        marginLeft: 0,
        marginTop: 35,
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold', marginTop: 25
    },
})