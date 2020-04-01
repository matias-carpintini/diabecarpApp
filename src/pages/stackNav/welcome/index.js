import AntDesign from "@expo/vector-icons/AntDesign";
import LottieView from "lottie-react-native";
import React, { useRef } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View
} from "react-native";
import {
  useDarkMode,
  useDarkModeContext,
  useDynamicStyleSheet
} from "react-native-dark-mode";
import { RectButton } from "react-native-gesture-handler";
import dynamicStyles from "./style";
console.disableYellowBox = true;

const { width: WIDTH, height: HEIGTH } = Dimensions.get("window");

function Welcome({ navigation }) {
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  const styles = useDynamicStyleSheet(dynamicStyles);
  const mode = useDarkModeContext();
  const isDarkMode = useDarkMode();

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "light-content"}
        backgroundColor={isDarkMode ? "#3E3F4A" : "#F69494"}
      />
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <View style={{ flexDirection: "row", margin: 42 }}>
            <Image
              source={require("./../../../assets/images/logo.png")}
              style={styles.profileImg}
            />
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "#FFF",
                  marginLeft: "13%",
                  marginTop: "20%",
                  fontSize: 22
                }}
              >
                Diabecarp
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "#fff",
                  marginLeft: "13%",
                  marginTop: -10,
                  fontSize: 10
                }}
              >
                Toma el control de tu diabetes
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.welcomeText}>Welcome back</Text>
        <Text style={styles.descriptionText}>
          Diabecarp is a Simple and Easy Way to Control Diabetes, Just by Eating
          Correctly. Protect yourself from this evil by controlling your
          diabetes. Definitive solution. Controlled Diabetes Now.
        </Text>
        <RectButton
          rippleColor={"pink"}
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.btnLogin}
        >
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              color: "#FFF",
              fontSize: 14,
              marginTop: "17%",
              marginLeft: "4%"
            }}
          >
            Login with my Account <AntDesign name={"arrowright"} size={15} />{" "}
          </Text>
        </RectButton>
        <RectButton
          rippleColor={"pink"}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          style={styles.btnAccount}
        >
          <Text style={styles.textAccount}>
            Create an Account <AntDesign name={"arrowright"} size={15} />{" "}
          </Text>
        </RectButton>

        {isDarkMode ? (
          <LottieView
            source={require("./../../../assets/teamworkdark.json")}
            autoPlay
            loop
            style={{ marginTop: "65%" }}
          />
        ) : (
          <LottieView
            source={require("./../../../assets/teamwork.json")}
            autoPlay
            loop
            style={{ marginTop: "65%" }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
export default Welcome;
