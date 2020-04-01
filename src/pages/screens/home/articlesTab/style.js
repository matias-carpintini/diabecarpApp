
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
        marginTop: 30,
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold', marginTop: 25
    },
    postsPopText: {
        color: new DynamicValue('#000', '#FFF'),
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        marginTop: -5,
        marginLeft: '6%'
    },
    popularPosts: {
        marginTop: 10,
        marginRight: 20,
        backgroundColor: '#000',
        width: WIDTH * 0.78,
        height: HEIGTH * 0.5,
        borderRadius: 10,
        overflow: 'hidden'
    }
})