import Icon from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {
  useDarkMode,
  useDarkModeContext,
  useDynamicStyleSheet
} from "react-native-dark-mode";
import { RectButton } from "react-native-gesture-handler";
import stylessss from "./style";
console.disableYellowBox = true;

const { width: WIDTH, height: HEIGTH } = Dimensions.get("window");

function sDetails({ navigation }) {
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
          style={{ marginTop: "5%", marginBottom: "4%" }}
        >
          <Icon
            name={"chevron-left"}
            size={50}
            color={"#FFA185"}
            onPress={() => navigation.goBack()}
            style={{ marginLeft: "5%", marginTop: "2%" }}
          />
        </TouchableOpacity>

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
        <Text style={styles.text}>Course 1</Text>
        <Text style={styles.text2}>By Zachary Levi</Text>
        <RectButton rippleColor={"pink"} style={styles.popularPosts}>
          <Image
            source={require("./../../../../../assets/images/learn.jpg")}
            style={{
              resizeMode: "cover",
              width: undefined,
              height: 230,
              flex: 1,
              opacity: 0.7,
              borderRadius: 10
            }}
          />
          <Text
            style={{
              margin: 16,
              fontSize: 16,
              color: "#fff",
              fontFamily: "Poppins-Medium",
              position: "absolute",
              bottom: "10%"
            }}
          >
            Effectives methods to get better at UdasdsI Design
          </Text>
          <Image
            source={require("./../../../../../assets/images/bookmark.png")}
            style={{
              width: 30,
              height: 30,
              bottom: 0,
              position: "absolute",
              margin: 16
            }}
          />
        </RectButton>
        <Text style={styles.text3}>
          Effectives methods to get better at UdasdsI Design
        </Text>

        <Text style={styles.text}>Course Details</Text>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          snapToInterval={360}
          snapToAlignment={"center"}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            maxHeight: 400,
            marginTop: "2%",
            marginLeft: "5%",
            marginBottom: 200
          }}
        >
          <RectButton
            rippleColor={"pink"}
            style={{
              backgroundColor: "#544F63",
              width: WIDTH * 0.45,
              height: WIDTH * 0.65,
              borderRadius: 10,
              marginRight: 20,
              marginBottom: 15
            }}
          >
            <Text
              style={{
                margin: 16,
                fontSize: 16,
                color: "#fff",
                fontFamily: "Poppins-SemiBold"
              }}
            >
              Introduce
            </Text>

            <RectButton
              style={{
                alignSelf: "center",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                height: 60,
                width: 60,
                borderRadius: 40,
                backgroundColor: "#FFF",
                bottom: 0,
                position: "absolute",
                margin: 16,
                right: 0
              }}
            >
              <Image
                source={require("./../../../../../assets/images/play.png")}
                style={{ width: 9, height: 9 }}
              />
            </RectButton>
          </RectButton>
          <RectButton
            rippleColor={"pink"}
            style={{
              backgroundColor: "#54467C",
              width: WIDTH * 0.45,
              height: WIDTH * 0.65,
              borderRadius: 10,
              marginRight: 20
            }}
          >
            <Text
              style={{
                margin: 16,
                fontSize: 16,
                color: "#fff",
                fontFamily: "Poppins-SemiBold"
              }}
            >
              Chapter 01
            </Text>

            <RectButton
              style={{
                alignSelf: "center",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                height: 60,
                width: 60,
                borderRadius: 40,
                backgroundColor: "#FFF",
                bottom: 0,
                position: "absolute",
                margin: 16,
                right: 0
              }}
            >
              <Image
                source={require("./../../../../../assets/images/play.png")}
                style={{ width: 9, height: 9 }}
              />
            </RectButton>
          </RectButton>
          <RectButton
            rippleColor={"pink"}
            style={{
              backgroundColor: "#F65A5A",
              width: WIDTH * 0.45,
              height: WIDTH * 0.65,
              borderRadius: 10,
              marginRight: 20
            }}
          >
            <Text
              style={{
                margin: 16,
                fontSize: 16,
                color: "#fff",
                fontFamily: "Poppins-SemiBold"
              }}
            >
              Chapter 02
            </Text>

            <RectButton
              style={{
                alignSelf: "center",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                height: 60,
                width: 60,
                borderRadius: 40,
                backgroundColor: "#FFF",
                bottom: 0,
                position: "absolute",
                margin: 16,
                right: 0
              }}
            >
              <Image
                source={require("./../../../../../assets/images/play.png")}
                style={{ width: 9, height: 9 }}
              />
            </RectButton>
          </RectButton>
        </ScrollView>
      </ScrollView>
    </>
  );
}
export default sDetails;
