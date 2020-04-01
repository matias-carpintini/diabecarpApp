import { StyleSheet, Dimensions } from 'react-native';

import styled from 'styled-components/native'
import { DynamicStyleSheet, DynamicValue, useDynamicStyleSheet } from 'react-native-dark-mode'

const { width: WIDTH, height: HEIGTH } = Dimensions.get('window');

const stylessss = new DynamicStyleSheet({
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
        fontFamily:'Poppins-Medium',
        paddingLeft: 20,
        color: new DynamicValue('#000', '#FFF')
    }

});

export const AvatarArea = styled.View`
background:#F4F4F4;
width:170px;
height:170px;
align-self:center;
margin:5%;
margin-top:0%;
margin-bottom:1%;
border-radius:15px;
`;
export const AvatarText = styled.Text`
color:#A2A2A2;
font-family:Poppins-Medium;
align-self:center;
font-size:12px;

`;
export const SignUpText = styled.Text`
color:#F99A9A;
font-family:Poppins-SemiBold;
font-size:22px;
margin-top:5%;
margin-left:8%;
`;
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

export const SignUpTerms = styled.Text`
font-family:Poppins-Bold;
color: #C9C9C9;
font-size:12px;
align-self:center;
`;

export const SignUpButton = styled.TouchableOpacity`
background:#F38484;
border-radius:50px;
`;

export default stylessss;