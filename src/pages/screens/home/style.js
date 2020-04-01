import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH, height: HEIGTH } = Dimensions.get('window');

const styless = StyleSheet.create({
    scrollView: {
        backgroundColor: '#12121B',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    container:{
        height: HEIGTH * 0.25,
        backgroundColor: '#6E71DC',
        paddingHorizontal: '3%',
        paddingVertical: 10
    },
    profileImg: {
        width: WIDTH * 0.16,
        height: WIDTH * 0.16,
        backgroundColor: '#000',
        borderRadius: 20,

        overflow: 'hidden'
    }, 
    profileInfos:{
        // backgroundColor: 'cyan',
        paddingHorizontal: '5%',
        top: -WIDTH * 0.10,
    },
    nameSpace:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
    tabControl:{
        height: '100%',
        paddingHorizontal: '5%',
        paddingVertical: 15,
    }
    
});

export default styless;