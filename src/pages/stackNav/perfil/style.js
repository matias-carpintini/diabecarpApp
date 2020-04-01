import { StyleSheet, Dimensions } from 'react-native';
import { DynamicStyleSheet, DynamicValue } from 'react-native-dark-mode';

const { width: WIDTH, height: HEIGTH } = Dimensions.get('window');

const styles = new DynamicStyleSheet({
    scrollView: {
        backgroundColor: new DynamicValue('#FFF', '#12121B'),
        paddingHorizontal: '5%'
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    container:{
        height: HEIGTH * 0.08,
        backgroundColor: 'transparent',
        paddingVertical: 10
    },
    profileImg: {
        width: WIDTH * 0.6,
        height: WIDTH * 0.6,
        backgroundColor: '#FFA185',
        borderRadius: 40,
        alignSelf: 'center',
        overflow: 'hidden',
    }, 
    profileInfos:{
        // backgroundColor: 'cyan',
        marginTop: -80,
        paddingHorizontal: '5%',
    },
    userInfos:{
        backgroundColor: new DynamicValue('#F3F4F9', '#333'),
        marginVertical: 20,
        paddingHorizontal: '10%',
        paddingVertical: 30,
        borderRadius: 2
    },
    userInfosText:{
        color: new DynamicValue('#111', '#fafafa'),
        fontFamily: 'Poppins-Medium', 
        maxWidth: '80%', 
        marginLeft: 5, 
        fontSize: 11
    },
    nameSpace:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userName:{
        fontFamily: 'Poppins-Bold',
        textAlign: 'center',
        fontSize: 20,
        color: new DynamicValue( '#12121B', '#FFF')
    },
    editButton:{
        borderRadius: 100,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderColor: '#6E71DC',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    
    
});

export default styles;