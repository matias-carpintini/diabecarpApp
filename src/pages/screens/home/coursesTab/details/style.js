import { Dimensions } from "react-native";
import { DynamicStyleSheet, DynamicValue } from "react-native-dark-mode";
import styled from "styled-components/native";

const { width: WIDTH, height: HEIGTH } = Dimensions.get("window");

const stylessss = new DynamicStyleSheet({
  container: {
    flexDirection: "row",
    backgroundColor: new DynamicValue("#fff", "#12121B")
  },
  containerBottom: {
    flexDirection: "row",
    backgroundColor: new DynamicValue("#fff", "#12121B"),
    justifyContent: "center",
    height: HEIGTH * 0.1
  },
  scrollView: {
    backgroundColor: new DynamicValue("#fff", "#12121B")
  },
  avatar: {
    backgroundColor: new DynamicValue("#F4F4F4", "#3E3F4A"),
    width: 170,
    height: 170,
    alignSelf: "center",
    margin: "5%",
    marginTop: "0%",
    marginBottom: "1%",
    borderRadius: 15
  },
  avatarTexxt: {
    color: new DynamicValue("#FFFFFF", "#A4A4A4"),
    fontFamily: "Poppins-Medium",
    alignSelf: "center",
    fontSize: 12
  },
  input: {
    backgroundColor: new DynamicValue("#F4F4F4", "#3E3F4A"),
    borderRadius: 10,
    fontFamily: "Poppins-Medium",
    paddingLeft: 20,
    color: new DynamicValue("#000", "#FFF")
  },
  profileImg: {
    width: WIDTH * 0.16,
    height: WIDTH * 0.16,
    backgroundColor: "#000",
    borderRadius: 20,

    overflow: "hidden"
  },
  text: {
    color: new DynamicValue("#000", "#FFF"),
    fontFamily: "Poppins-SemiBold",
    marginLeft: "5%",
    fontSize: 20,
    marginBottom: 0
  },
  text2: {
    color: new DynamicValue("#222", "#ddd"),
    fontFamily: "Poppins-SemiBold",
    marginLeft: "5%",
    fontSize: 12,
    marginBottom: 0
  },
  text3: {
    color: new DynamicValue("#000", "#fff"),
    margin: 24,
    fontSize: 16,
    fontFamily: "Poppins-Medium"
  },
  input: {
    backgroundColor: new DynamicValue("#DEDEE0", "#3E3F4A"),
    borderRadius: 10,
    fontFamily: "Poppins-Medium",
    paddingLeft: 20,
    color: new DynamicValue("#000", "#FFF")
  },
  popularPosts: {
    marginTop: 10,
    backgroundColor: "#000",
    width: WIDTH * 0.9,
    height: HEIGTH * 0.4,
    borderRadius: 10,
    alignSelf: "center",
    overflow: "hidden"
  }
});

export const SignUpArea = styled.View`
  flex: 1;
`;

export const SignUpInput = styled.TextInput`
  background: #f4f4f4;
  border-radius: 10px;
`;

export const SignUpInputText = styled.Text`
  font-family: Poppins-Medium;
  color: #a1a1a1;
  font-size: 13px;
  margin-top: 3%;
  margin-bottom: 2%;
`;

export const SignUpInputArea = styled.View`
  margin: 8%;
  margin-top: 3%;
  margin-bottom: 5%;
`;

export default stylessss;
