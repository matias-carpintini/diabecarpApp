import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { DynamicValue, useDynamicStyleSheet } from "react-native-dark-mode";
import { RectButton } from "react-native-gesture-handler";
import dynamicStyles from "./style";

const { width: WIDTH, height: HEIGTH } = Dimensions.get("window");

// import { Container } from './styles';

function RecipesTab() {
  const styles = useDynamicStyleSheet(dynamicStyles);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ bottom: -15 }}>
      <View style={{ marginBottom: 100 }}>
        <Text style={styles.postsText}>A lot of recipes for you</Text>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          snapToInterval={340}
          snapToAlignment={"center"}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ maxHeight: "100%" }}
        >
          <RectButton rippleColor={"white"} style={styles.popularPosts}>
            <RectButton rippleColor={"white"}>
              <Image
                source={require("./../../../../assets/images/wintersoap.jpg")}
                style={{
                  resizeMode: "cover",
                  width: undefined,
                  height: 230,
                  opacity: 1,
                  borderRadius: 10,
                  margin: 10
                }}
              />
            </RectButton>
            <Image
              source={require("./../../../../assets/images/bookmark.png")}
              style={{
                width: 30,
                height: 30,
                top: 165,
                position: "absolute",
                margin: 25
              }}
            />
            <Text style={styles.postTitle}>Food</Text>
            <Text
              style={[
                {
                  margin: 16,
                  fontSize: 12,
                  color: "#333",
                  fontFamily: "Poppins-Medium",
                  position: "absolute",
                  bottom: "5%"
                },
                styles.postsPopText
              ]}
            >
              15 Reasons why Keanu Reaves is A Pure Soul.
            </Text>
            <Image
              source={require("./../../../../assets/images/fivestars.png")}
              style={{
                width: 80,
                height: 12,
                bottom: 0,
                right: 0,
                position: "absolute",
                margin: 15,
                opacity: 0.7
              }}
            />
          </RectButton>
          <RectButton rippleColor={"white"} style={styles.popularPosts}>
            <RectButton rippleColor={"white"}>
              <Image
                source={require("./../../../../assets/images/fod.jpg")}
                style={{
                  resizeMode: "cover",
                  width: undefined,
                  height: 230,
                  opacity: 1,
                  borderRadius: 10,
                  margin: 10
                }}
              />
            </RectButton>
            <Image
              source={require("./../../../../assets/images/bookmark.png")}
              style={{
                width: 30,
                height: 30,
                top: 165,
                position: "absolute",
                margin: 25
              }}
            />
            <Text style={styles.postTitle}>Food</Text>
            <Text
              style={[
                {
                  margin: 16,
                  fontSize: 12,
                  color: "#333",
                  fontFamily: "Poppins-Medium",
                  position: "absolute",
                  bottom: "5%"
                },
                styles.postsPopText
              ]}
            >
              15 Reasons why Keanu Reaves is A Pure Soul.
            </Text>
            <Image
              source={require("./../../../../assets/images/fivestars.png")}
              style={{
                width: 80,
                height: 12,
                bottom: 0,
                right: 0,
                position: "absolute",
                margin: 15,
                opacity: 0.7
              }}
            />
          </RectButton>
        </ScrollView>
        <Text style={styles.postsText}>Popular</Text>
        <View style={styles.feedPopularPosts}>
          <RectButton rippleColor={"white"}>
            <Image
              source={require("./../../../../assets/images/soup.jpg")}
              style={{
                resizeMode: "cover",
                width: undefined,
                height: 200,
                opacity: 0.7,
                borderRadius: 15
              }}
            />
          </RectButton>
          <Image
            source={require("./../../../../assets/images/bookmark.png")}
            style={{
              width: 30,
              height: 30,
              top: 140,
              right: 0,
              position: "absolute",
              margin: 16
            }}
          />
          <Text
            style={{
              margin: 16,
              fontSize: 16,
              color: "#fff",
              fontFamily: "Poppins-Medium",
              position: "absolute",
              top: "36%"
            }}
          >
            Meal
          </Text>
          <Text
            style={{
              marginVertical: 16,
              marginHorizontal: 3,
              fontSize: 16,
              color: "#FFA7A7",
              fontFamily: "Poppins-Medium",
              position: "absolute",
              bottom: "25%"
            }}
          >
            Soap
          </Text>
          <Text
            style={[
              {
                marginVertical: 16,
                marginHorizontal: 3,
                fontSize: 12,
                color: new DynamicValue("#444", "#eee"),
                fontFamily: "Poppins-Bold",
                position: "absolute",
                bottom: "19%"
              },
              styles.feedPopText
            ]}
          >
            5.0{" "}
            <Image
              source={require("./../../../../assets/images/fivestars.png")}
              style={{
                width: 100,
                height: 15,
                bottom: 0,
                right: 0,
                position: "absolute",
                margin: 15,
                opacity: 0.8
              }}
            />
          </Text>
          <Text
            style={[
              {
                marginVertical: 16,
                marginHorizontal: 3,
                fontSize: 12,
                color: new DynamicValue("#444", "#eee"),
                fontFamily: "Poppins-Medium",
                position: "absolute",
                bottom: "1%"
              },
              styles.feedPopText
            ]}
          >
            It is important to keep the glycemic index under control in the
            body, as well as to decrease the sodium content of the diet.
          </Text>
        </View>
        <View style={styles.feedPopularPosts}>
          <RectButton rippleColor={"white"}>
            <Image
              source={require("./../../../../assets/images/ice.jpeg")}
              style={{
                resizeMode: "cover",
                width: undefined,
                height: 200,
                opacity: 0.7,
                borderRadius: 15
              }}
            />
          </RectButton>
          <Image
            source={require("./../../../../assets/images/bookmark.png")}
            style={{
              width: 30,
              height: 30,
              top: 140,
              right: 0,
              position: "absolute",
              margin: 16
            }}
          />
          <Text
            style={{
              margin: 16,
              fontSize: 16,
              color: "#fff",
              fontFamily: "Poppins-Medium",
              position: "absolute",
              top: "36%"
            }}
          >
            Dessert
          </Text>
          <Text
            style={{
              marginVertical: 16,
              marginHorizontal: 3,
              fontSize: 16,
              color: "#FFA7A7",
              fontFamily: "Poppins-Medium",
              position: "absolute",
              bottom: "25%"
            }}
          >
            Ice Cream Healthy
          </Text>
          <Text
            style={[
              {
                marginVertical: 16,
                marginHorizontal: 3,
                fontSize: 12,
                color: new DynamicValue("#444", "#eee"),
                fontFamily: "Poppins-Bold",
                position: "absolute",
                bottom: "19%"
              },
              styles.feedPopText
            ]}
          >
            5.0{" "}
            <Image
              source={require("./../../../../assets/images/fivestars.png")}
              style={{
                width: 100,
                height: 15,
                bottom: 0,
                right: 0,
                position: "absolute",
                margin: 15,
                opacity: 0.8
              }}
            />
          </Text>
          <Text
            style={[
              {
                marginVertical: 16,
                marginHorizontal: 3,
                fontSize: 12,
                color: new DynamicValue("#444", "#eee"),
                fontFamily: "Poppins-Medium",
                position: "absolute",
                bottom: "1%"
              },
              styles.feedPopText
            ]}
          >
            It is important to keep the glycemic index under control in the
            body, as well as to decrease the sodium content of the diet.
          </Text>
        </View>
        <View style={styles.feedPopularPosts}>
          <RectButton rippleColor={"white"}>
            <Image
              source={require("./../../../../assets/images/fod.jpg")}
              style={{
                resizeMode: "cover",
                width: undefined,
                height: 200,
                opacity: 0.7,
                borderRadius: 15
              }}
            />
          </RectButton>
          <Image
            source={require("./../../../../assets/images/bookmark.png")}
            style={{
              width: 30,
              height: 30,
              top: 140,
              right: 0,
              position: "absolute",
              margin: 16
            }}
          />
          <Text
            style={{
              margin: 16,
              fontSize: 16,
              color: "#fff",
              fontFamily: "Poppins-Medium",
              position: "absolute",
              top: "36%"
            }}
          >
            Meal
          </Text>
          <Text
            style={{
              marginVertical: 16,
              marginHorizontal: 3,
              fontSize: 16,
              color: "tomato",
              fontFamily: "Poppins-Medium",
              position: "absolute",
              bottom: "25%"
            }}
          >
            Meat Healthy
          </Text>
          <Text
            style={[
              {
                marginVertical: 16,
                marginHorizontal: 3,
                fontSize: 12,
                color: new DynamicValue("#444", "#eee"),
                fontFamily: "Poppins-Bold",
                position: "absolute",
                bottom: "19%"
              },
              styles.feedPopText
            ]}
          >
            5.0{" "}
            <Image
              source={require("./../../../../assets/images/fivestars.png")}
              style={{
                width: 100,
                height: 15,
                bottom: 0,
                right: 0,
                position: "absolute",
                margin: 15,
                opacity: 0.8
              }}
            />
          </Text>
          <Text
            style={[
              {
                marginVertical: 16,
                marginHorizontal: 3,
                fontSize: 12,
                color: new DynamicValue("#444", "#eee"),
                fontFamily: "Poppins-Medium",
                position: "absolute",
                bottom: "1%"
              },
              styles.feedPopText
            ]}
          >
            It is important to keep the glycemic index under control in the
            body, as well as to decrease the sodium content of the diet.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default RecipesTab;
