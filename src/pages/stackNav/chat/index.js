import AntDesign from "@expo/vector-icons/AntDesign";
import Icon from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import {
  useDarkMode,
  useDarkModeContext,
  useDynamicStyleSheet
} from "react-native-dark-mode";
import { RectButton } from "react-native-gesture-handler";
import stylessss, { SignUpArea, SignUpInputArea } from "./style";
console.disableYellowBox = true;

const initialLayout = { width: Dimensions.get("window").width };

const { width: WIDTH, height: HEIGTH } = Dimensions.get("window");

const backgroundColors = {
  light: "#FFF",
  dark: "#12121B"
};

function Chat({ navigation }) {
  const styles = useDynamicStyleSheet(stylessss);
  const mode = useDarkModeContext();
  const isDarkMode = useDarkMode();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ marginTop: "5%", marginBottom: "4%", marginLeft: "5%" }}
        >
          <Icon
            name={"chevron-left"}
            size={50}
            color={"#FFA185"}
            onPress={() => navigation.goBack()}
            style={{ marginLeft: "5%", marginTop: "2%" }}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.text}>José Lorenz</Text>
          <Text
            style={{
              fontFamily: "Poppins_regular",
              color: "#959595",
              marginLeft: "15%",
              marginTop: -8,
              fontSize: 11
            }}
          >
            Last Seen 9p.m <AntDesign name="clockcircleo" color="#C28E51" />
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            flexDirection: "row",
            alignItems: "center",
            marginRight: 20
          }}
        >
          <TouchableOpacity>
            <Ionicons name="ios-search" color="#969696" size={32} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="md-more"
              color="#969696"
              size={32}
              style={{ marginLeft: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View
          style={{
            height: 60,
            width: 235,
            backgroundColor: "#FF8484",
            alignSelf: "flex-end",
            margin: 16,
            marginBottom: 0,
            marginTop: 44,
            borderRadius: 8,
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              left: "-20%",
              fontFamily: "Poppins-Medium",
              color: "#FFFFFF"
            }}
          >
            Hello, how are you?
          </Text>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#ffff",
              alignSelf: "center",
              borderRadius: 8,
              overflow: "hidden",
              marginRight: "2%"
            }}
          >
            <Image
              source={require("./../../../assets/images/kristina.jpg")}
              style={{
                resizeMode: "cover",
                width: undefined,
                height: undefined,
                flex: 1
              }}
            />
          </View>
        </View>
        <View
          style={{
            height: 60,
            width: 260,
            backgroundColor: "#DEDEE0",
            alignSelf: "flex-start",
            margin: 16,
            marginTop: 20,
            marginBottom: 0,
            borderRadius: 8,
            flexDirection: "row",
            justifyContent: "flex-start"
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#ffff",
              alignSelf: "center",
              borderRadius: 5,
              overflow: "hidden",
              marginLeft: "2%"
            }}
          >
            <Image
              source={require("./../../../assets/images/dreamer.jpg")}
              style={{
                resizeMode: "cover",
                width: undefined,
                height: undefined,
                flex: 1
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: "center",
              right: "-20%",
              fontFamily: "Poppins-Medium",
              color: "#818181"
            }}
          >
            Hi, I’m fine and you? :D
          </Text>
        </View>
        <View
          style={{
            height: 60,
            width: 275,
            backgroundColor: "#FF8484",
            alignSelf: "flex-end",
            margin: 16,
            marginBottom: 0,
            borderRadius: 8,
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              left: "-20%",
              fontFamily: "Poppins-Medium",
              color: "#FFFFFF"
            }}
          >
            This is so Great! I'm fine !
          </Text>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#ffff",
              alignSelf: "center",
              borderRadius: 5,
              overflow: "hidden",
              marginRight: "2%"
            }}
          >
            <Image
              source={require("./../../../assets/images/kristina.jpg")}
              style={{
                resizeMode: "cover",
                width: undefined,
                height: undefined,
                flex: 1
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.containerBottom}>
        <SignUpArea>
          <SignUpInputArea>
            <TextInput
              style={styles.input}
              multiline={true}
              selectionColor={"pink"}
            ></TextInput>
          </SignUpInputArea>
        </SignUpArea>
        <RectButton
          rippleColor={"pink"}
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#FF8484",
            alignSelf: "center",
            marginBottom: 15,
            borderRadius: 10,
            marginRight: 20,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <FontAwesome name="send" color="#FFF" size={22} />
        </RectButton>
      </View>
    </>
  );
}
export default Chat;
