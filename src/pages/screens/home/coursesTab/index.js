import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { useDynamicStyleSheet } from "react-native-dark-mode";
import { RectButton } from "react-native-gesture-handler";
import GoToButton from "./button/";
import dynamicStyles from "./style";

const { width: WIDTH, height: HEIGTH } = Dimensions.get("window");

// import { Container } from './styles';

function ArticlesTab({ navigation }) {
  const styles = useDynamicStyleSheet(dynamicStyles);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ bottom: -15 }}>
      <View style={{ marginBottom: 100 }}>
        {/* <ScrollView contentInsetAdjustmentBehavior="automatic" snapToInterval={340} snapToAlignment={'center'} horizontal={true} showsHorizontalScrollIndicator={false} style={{ maxHeight: '100%' }}> */}
        <View rippleColor={"pink"} style={styles.popularPosts}>
          <View style={{ width: WIDTH * 0.3, marginRight: 50 }}>
            <Text style={styles.postsPopText}>
              What do you want to learn today?
            </Text>
            <RectButton
              style={{
                backgroundColor: "#FFA7A7",
                alignSelf: "center",
                width: "100%",
                justifyContent: "center",
                paddingVertical: 8,
                borderRadius: 7,
                position: "absolute",
                bottom: 20
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Bold",
                  color: "#fafafa",
                  textAlign: "center",
                  fontSize: 11
                }}
              >
                Get Started
              </Text>
            </RectButton>
          </View>
          <Image
            source={require("./../../../../assets/images/course.png")}
            style={{
              resizeMode: "cover",
              width: WIDTH * 0.5,
              height: 230,
              opacity: 1,
              borderRadius: 10,
              right: 15
            }}
          />
        </View>
        {/* </ScrollView> */}
        <Text style={styles.postsText}>Last seen courses</Text>

        <View style={styles.feedPopularPosts}>
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 15,
              overflow: "hidden"
            }}
          >
            <Image
              source={require("./../../../../assets/images/learn.jpg")}
              style={{
                resizeMode: "cover",
                width: undefined,
                height: undefined,
                flex: 1
              }}
            />
          </View>
          <View style={{ height: 80, marginLeft: -40 }}>
            <Text
              style={[
                {
                  fontFamily: "Poppins-Medium",
                  fontSize: 14,
                  marginLeft: "10%"
                },
                styles.feedPostsText
              ]}
            >
              Course 1
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: 10,
                color: "#9C9C9C",
                marginLeft: "10%"
              }}
            >
              1 hours, 30 min
            </Text>
          </View>
          <GoToButton screenName="Details" />
        </View>
      </View>
    </ScrollView>
  );
}

export default ArticlesTab;
