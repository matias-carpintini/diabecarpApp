import { StyleSheet, Dimensions } from 'react-native';

import { DynamicStyleSheet, DynamicValue, useDynamicStyleSheet } from 'react-native-dark-mode'
const { width: WIDTH, height: HEIGTH } = Dimensions.get('window');


export default dynamicStyles = new DynamicStyleSheet({
    scrollView: {
        backgroundColor: '#12121B',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    container: {
        height: '100%',
        backgroundColor: new DynamicValue('#fff', '#12121B'),
    },
    containerLogo: {
        backgroundColor: new DynamicValue('#F69494', '#3E3F4A'),
        paddingBottom: 20,
        borderBottomLeftRadius: 100
    },
    welcomeText: {
        color: new DynamicValue('#000', '#FFF'),
        fontFamily: 'Poppins-Bold',
        marginLeft: '8%',
        marginTop: '10%',
        fontSize: 22
    },
    descriptionText: {
        fontFamily: 'Poppins-Medium',
        color: '#979797',
        marginLeft: '8%',
        marginTop: 0,
        fontSize: 14,
        maxWidth: 370
    },
    btnLogin: {
        height: HEIGTH * 0.057,
        width: WIDTH * 0.59,
        backgroundColor: '#D97979',
        alignSelf: 'flex-end',
        marginTop: '10%',
        marginRight: '5%',
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnAccount: {
        height: HEIGTH * 0.057,
        width: WIDTH * 0.59,
        backgroundColor: new DynamicValue('#FFF', '#4F5060'),
        elevation: 1,
        alignSelf: 'flex-end',
        marginTop: '4%', marginRight: '5%',
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textAccount: {
        fontFamily: 'Poppins-Medium',
        color: new DynamicValue('#000', '#FFF'),
        fontSize: 14,
        marginTop: '8%'
    },




    profileImg: {
        marginTop: '13%',
        marginRight: -10,
        width: 50,
        height: 50,
    },
    profileInfos: {
        // backgroundColor: 'cyan',
        paddingHorizontal: '5%',
        top: -WIDTH * 0.10,
    },
    nameSpace: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    editButton: {
        borderRadius: 100,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderColor: '#6E71DC',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    tabControl: {
        height: '100%',
        paddingHorizontal: '5%',
        paddingVertical: 15,
    },


});

