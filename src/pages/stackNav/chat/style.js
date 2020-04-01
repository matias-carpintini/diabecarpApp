import { StyleSheet, Dimensions } from 'react-native';

import styled from 'styled-components/native'
import { DynamicStyleSheet, DynamicValue, useDynamicStyleSheet } from 'react-native-dark-mode'

const { width: WIDTH, height: HEIGTH } = Dimensions.get('window');

const stylessss = new DynamicStyleSheet({
    container: {
        flexDirection: "row",
        backgroundColor: new DynamicValue('#fff', '#12121B'),
    },
    containerBottom: {
        flexDirection: "row",
        backgroundColor: new DynamicValue('#fff', '#12121B'),
        justifyContent:"center",
        height: HEIGTH * 0.1,
    },
    scrollView: {
        backgroundColor: new DynamicValue('#fff', '#12121B'),
    },
    avatar: {
        backgroundColor: new DynamicValue('#F4F4F4', '#3E3F4A'),
        width: 170,
        height: 170,
        alignSelf: 'center',
        margin: '5%',
        marginTop: '0%',
        marginBottom: '1%',
        borderRadius: 15
    },
    avatarTexxt: {
        color: new DynamicValue('#FFFFFF', '#A4A4A4'),
        fontFamily: 'Poppins-Medium',
        alignSelf: 'center',
        fontSize: 12,
    },
    input: {
        backgroundColor: new DynamicValue('#F4F4F4', '#3E3F4A'),
        borderRadius: 10,
        fontFamily: 'Poppins-Medium',
        paddingLeft: 20,
        color: new DynamicValue('#000', '#FFF')
    },
    profileImg: {
        width: WIDTH * 0.16,
        height: WIDTH * 0.16,
        backgroundColor: '#000',
        borderRadius: 20,

        overflow: 'hidden'
    },
    text: {
        color: new DynamicValue('#000', '#FFF'),
        fontFamily: 'Poppins-SemiBold',
        marginLeft: '15%',
        marginTop: '12%',
        fontSize: 20,
        marginBottom: 0,
    },
    input: {
        backgroundColor: new DynamicValue('#DEDEE0', '#3E3F4A'),
        borderRadius: 10,
        fontFamily:'Poppins-Medium',
        paddingLeft: 20,
        color: new DynamicValue('#000', '#FFF')
    }

});

export default stylessss;


export const SignUpArea = styled.View`
flex:1;

`;

export const SignUpInput = styled.TextInput`
background:#F4F4F4;
border-radius:10px;

`;

export const SignUpInputText = styled.Text`
font-family:Poppins-Medium;
color: #A1A1A1;
font-size:13px;
margin-top:3%;
margin-bottom:2%;
`;

export const SignUpInputArea = styled.View`
margin:8%;
margin-top:3%;
margin-bottom:5%;
`;
