import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Dimensions, ScrollView, Text, TextInput, View } from "react-native";
import {
  useDarkMode,
  useDarkModeContext,
  useDynamicStyleSheet
} from "react-native-dark-mode";
import { RectButton } from "react-native-gesture-handler";
import stylessss, {
  SignUpArea,
  SignUpInputArea,
  SignUpInputText,
  SignUpTerms,
  SignUpText
} from "./style";
console.disableYellowBox = true;

const initialLayout = { width: Dimensions.get("window").width };

const { width: WIDTH, height: HEIGTH } = Dimensions.get("window");

const backgroundColors = {
  light: "#FFF",
  dark: "#12121B"
};

function SignUp() {
  const styles = useDynamicStyleSheet(stylessss);
  const mode = useDarkModeContext();
  const isDarkMode = useDarkMode();
  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <Feather
          name="arrow-left"
          size={30}
          color="#F99494"
          style={{ marginLeft: "5%", marginTop: "2%" }}
        />
        <View style={styles.avatar} />
        <Text style={styles.avatarTexxt}>Choose your Avatar</Text>
        <SignUpArea>
          <SignUpText>Create an Account</SignUpText>
          <SignUpInputArea>
            <SignUpInputText>Username</SignUpInputText>
            <TextInput style={styles.input}></TextInput>
            <SignUpInputText>Email</SignUpInputText>
            <TextInput style={styles.input}></TextInput>
            <SignUpInputText>Password</SignUpInputText>
            <TextInput style={styles.input}></TextInput>
          </SignUpInputArea>
          <SignUpTerms>
            I agree to the{" "}
            <Text style={{ color: "#EFB7AA" }}>terms+ conditions</Text>
          </SignUpTerms>
          <RectButton
            rippleColor={"pink"}
            style={{
              backgroundColor: "#F38484",
              borderRadius: 50,
              alignSelf: "center",
              width: 120,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              margin: "5%",
              padding: 0,
              flexDirection: "row"
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "Poppins-Medium",
                paddingTop: 10
              }}
            >
              SignUp
            </Text>
            <Feather
              name="arrow-right"
              size={20}
              color="white"
              style={{ paddingTop: 10, paddingLeft: "10%" }}
            />
          </RectButton>
        </SignUpArea>
      </ScrollView>
    </>
  );
}
export default SignUp;
