
import { DynamicStyleSheet, DynamicValue, useDynamicStyleSheet } from 'react-native-dark-mode'
import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

const { width: WIDTH, height: HEIGTH } = Dimensions.get('window');

export const TextArticle = styled.Text`
   position: absolute;
   elevation: 1;
    bottom: 0;
   margin:16px;
   font-size: 15px;
   color: #FFF;
   font-family: 'Poppins-Medium';
`;


// StyleSheets

export default dynamicStyles = new DynamicStyleSheet({
    container: {
        backgroundColor: new DynamicValue('#FFF', '#12121B'),
    },
    postsText: {
        color: new DynamicValue('#000', '#FFF'),
        marginLeft: 0,
        marginTop: 10,
        fontSize: 32,
        fontFamily: 'Poppins-Bold', marginTop: 25
    },
    timelineDescription: {
        color: new DynamicValue('#000', '#FFF'),
        fontFamily:'Poppins_regular',
     
    },
    timelineText: {
        color: new DynamicValue('#000', '#FFF'),
        fontSize:11,
        fontFamily: 'Poppins-Medium',
        marginTop: 25
    },
    timeLineTitle: {
        color: new DynamicValue('black', '#FFF'),
        margin: 16,
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        position: 'absolute',
        bottom: '18%'
    },
    postTitle: {
        color: new DynamicValue('tomato', '#FFF'),
        margin: 16,
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        position: 'absolute',
        bottom: '18%'
    },
    postsPopText: {
        color: new DynamicValue('#000', '#FFF'),
        fontFamily: 'Poppins-Medium',
        marginLeft: '6%'
    },
    popularPosts: {
        marginTop: 10,
        marginRight: 20,
        backgroundColor: new DynamicValue('#F9F9F9', '#43434F'),
        width: WIDTH * 0.68,
        height: HEIGTH * 0.5,
        borderRadius: 10,
        overflow: 'hidden'
    },
    feedPopularPosts: {
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: 'transparent',
        width: WIDTH * 0.9,
        height: HEIGTH * 0.45,
        borderRadius: 10,
        overflow: 'hidden'
    },
    feedPopText: {
        color: new DynamicValue('#000', '#FFF'),
    },
})