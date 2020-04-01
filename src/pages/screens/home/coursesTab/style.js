
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
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold', marginTop: 25
    },
    postsPopText: {
        color: new DynamicValue('#000', '#FFF'),
        marginLeft: 0,
        marginTop: 30,
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold', marginTop: 25
    },
    popularPosts: {
        flexDirection: 'row',
        marginTop: 10,
        // backgroundColor: 'green',
        width: WIDTH,
        height: HEIGTH * 0.32,
        borderRadius: 10,
        overflow: 'hidden'
    },
    feedPopularPosts: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 15,
        paddingHorizontal: 10,
        backgroundColor: new DynamicValue('#eee','#555'),
        width: WIDTH * 0.9,
        height: 100,
        borderRadius: 15,
        overflow: 'hidden'
    },
    feedPostsText: {
        color: new DynamicValue('#000', '#FFF')
    },
})