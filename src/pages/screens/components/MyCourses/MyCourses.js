import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { RectButton } from "react-native-gesture-handler";

const { width: WIDTH, height: HEIGTH } = Dimensions.get("window");

const MyCourses = () => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          snapToInterval={360}
          snapToAlignment={"center"}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <RectButton
            rippleColor={"pink"}
            style={{
              backgroundColor: "#FFA185",
              width: WIDTH * 0.35,
              height: HEIGTH * 0.2,
              borderRadius: 5,
              paddingVertical: 5,
              marginHorizontal: 5
            }}
          >
            <View style={{ height: 80 }}>
              <Text
                style={[
                  {
                    fontFamily: "Poppins-Bold",
                    fontSize: 12,
                    marginLeft: "10%",
                    marginTop: "5%",
                    color: "#fafafa"
                  }
                ]}
              >
                Course 1
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 9,
                  color: "#fafafa",
                  marginLeft: "10%"
                }}
              >
                1 hours, 30 min
              </Text>
            </View>
            <RectButton
              rippleColor={"pink"}
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
                borderRadius: 40,
                backgroundColor: "#FFF",
                marginRight: 5,
                position: "absolute",
                bottom: 5,
                right: 5
              }}
            >
              <Image
                source={require("./../../../../assets/images/play.png")}
                style={{ width: 8, height: 8 }}
              />
            </RectButton>
          </RectButton>
          <RectButton
            rippleColor={"pink"}
            style={{
              backgroundColor: "#FFA185",
              width: WIDTH * 0.35,
              height: HEIGTH * 0.2,
              borderRadius: 5,
              paddingVertical: 5,
              marginHorizontal: 5
            }}
          >
            <View style={{ height: 80 }}>
              <Text
                style={[
                  {
                    fontFamily: "Poppins-Bold",
                    fontSize: 12,
                    marginLeft: "10%",
                    marginTop: "5%",
                    color: "#fafafa"
                  }
                ]}
              >
                Course 1
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 9,
                  color: "#fafafa",
                  marginLeft: "10%"
                }}
              >
                1 hours, 30 min
              </Text>
            </View>
            <RectButton
              rippleColor={"pink"}
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
                borderRadius: 40,
                backgroundColor: "#FFF",
                marginRight: 5,
                position: "absolute",
                bottom: 5,
                right: 5
              }}
            >
              <Image
                source={require("./../../../../assets/images/play.png")}
                style={{ width: 8, height: 8 }}
              />
            </RectButton>
          </RectButton>
          <RectButton
            rippleColor={"pink"}
            style={{
              backgroundColor: "#FFA185",
              width: WIDTH * 0.35,
              height: HEIGTH * 0.2,
              borderRadius: 5,
              paddingVertical: 5,
              marginHorizontal: 5
            }}
          >
            <View style={{ height: 80 }}>
              <Text
                style={[
                  {
                    fontFamily: "Poppins-Bold",
                    fontSize: 12,
                    marginLeft: "10%",
                    marginTop: "5%",
                    color: "#fafafa"
                  }
                ]}
              >
                Course 1
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 9,
                  color: "#fafafa",
                  marginLeft: "10%"
                }}
              >
                1 hours, 30 min
              </Text>
            </View>
            <RectButton
              rippleColor={"pink"}
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
                borderRadius: 40,
                backgroundColor: "#FFF",
                marginRight: 5,
                position: "absolute",
                bottom: 5,
                right: 5
              }}
            >
              <Image
                source={require("./../../../../assets/images/play.png")}
                style={{ width: 8, height: 8 }}
              />
            </RectButton>
          </RectButton>
        </ScrollView>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 20 }}
        >
          <RectButton
            rippleColor={"pink"}
            style={{
              backgroundColor: "#FFA185",
              width: WIDTH * 0.7,
              height: HEIGTH * 0.4,
              borderRadius: 10,
              paddingVertical: 5,
              marginHorizontal: 5
            }}
          >
            <RectButton
              rippleColor={"pink"}
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
                borderRadius: 40,
                backgroundColor: "#FFF",
                marginRight: 5,
                position: "absolute",
                bottom: 5,
                right: 5
              }}
            >
              <Image
                source={require("./../../../../assets/images/play.png")}
                style={{ width: 8, height: 8 }}
              />
            </RectButton>
          </RectButton>
          <RectButton
            rippleColor={"pink"}
            style={{
              backgroundColor: "#FFA185",
              width: WIDTH * 0.7,
              height: HEIGTH * 0.4,
              borderRadius: 10,
              paddingVertical: 5,
              marginHorizontal: 5
            }}
          >
            <RectButton
              rippleColor={"pink"}
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
                borderRadius: 40,
                backgroundColor: "#FFF",
                marginRight: 5,
                position: "absolute",
                bottom: 5,
                right: 5
              }}
            >
              <Image
                source={require("./../../../../assets/images/play.png")}
                style={{ width: 8, height: 8 }}
              />
            </RectButton>
          </RectButton>
          <RectButton
            rippleColor={"pink"}
            style={{
              backgroundColor: "#FFA185",
              width: WIDTH * 0.7,
              height: HEIGTH * 0.4,
              borderRadius: 10,
              paddingVertical: 5,
              marginHorizontal: 5
            }}
          >
            <RectButton
              rippleColor={"pink"}
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
                borderRadius: 40,
                backgroundColor: "#FFF",
                marginRight: 5,
                position: "absolute",
                bottom: 5,
                right: 5
              }}
            >
              <Image
                source={require("./../../../../assets/images/play.png")}
                style={{ width: 8, height: 8 }}
              />
            </RectButton>
          </RectButton>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: '#fafafa',
  },
  engine: {
    position: "absolute",
    right: 0
  },
  container: {
    flex: 1,
    // backgroundColor: '#eee',
    // paddingHorizontal: '5%',
    paddingVertical: 30,
    borderRadius: 10
  },
  profileImg: {
    width: WIDTH * 0.13,
    height: WIDTH * 0.13,
    backgroundColor: "#444",
    borderRadius: 100
  },
  nameSpace: {
    marginLeft: 10,
    justifyContent: "center"
  }
});

export default MyCourses;
