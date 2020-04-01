import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextArticle } from "./style.js";

export default function Articles({ navigation }) {
  return (
    <View style={{ height: "100%", backgroundColor: "#FFFF", display: "flex" }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={{ margin: 22 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Feather name="arrow-left" size={34} color="black" />
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: "Poppins-Bold",
            color: "#000",
            fontSize: 20,
            margin: 16,
            marginTop: 0,
            alignSelf: "center"
          }}
        >
          Articles
        </Text>
        <ScrollView
          snapToInterval={360}
          snapToAlignment={"center"}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 30, marginTop: 10 }}
        >
          <View
            style={{
              margin: 22,
              marginTop: 5,
              borderColor: "#fff",
              backgroundColor: "#000",
              borderRadius: 15,
              height: 380,
              width: 300,
              overflow: "hidden"
            }}
          >
            <Image
              source={require("./../../assets/images/fastfood.png")}
              style={{
                resizeMode: "cover",
                width: undefined,
                height: undefined,
                flex: 1
              }}
            />
            <TextArticle style={{ color: "#fff" }}>
              Junkfood can make your life soo hard.
            </TextArticle>
          </View>
          <View
            style={{
              margin: 22,
              marginTop: 5,
              borderColor: "#fff",
              backgroundColor: "#000",
              borderRadius: 15,
              height: 380,
              width: 300,
              overflow: "hidden"
            }}
          >
            <Image
              source={require("./../../assets/images/meet.png")}
              style={{
                resizeMode: "cover",
                width: undefined,
                height: undefined,
                flex: 1
              }}
            />
            <TextArticle>Lorem Ipsom dolor sit amet.</TextArticle>
          </View>
        </ScrollView>
        <View style={{ height: "35%", width: "100%" }}>
          <Text
            style={{
              margin: 16,
              marginBottom: 18,
              fontFamily: "Poppins-Bold",
              color: "#000",
              fontSize: 20
            }}
          >
            Popular
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 100,
                width: 100,
                margin: 16,
                marginTop: 0,
                borderRadius: 20,
                overflow: "hidden"
              }}
            >
              <Image
                source={require("./../../assets/images/smoking.jpg")}
                style={{
                  resizeMode: "cover",
                  width: undefined,
                  height: undefined,
                  flex: 1
                }}
              />
            </View>
            <View style={{ flexDirection: "column", height: 110 }}>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 16,
                  color: "#FFA7A7"
                }}
              >
                Health
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 14,
                  marginTop: -5
                }}
              >
                Lorem Ipsum dolor sit amet
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 14,
                  marginTop: 20,
                  color: "#9C9C9C"
                }}
              >
                March 12, 2020
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 100,
                width: 100,
                margin: 16,
                marginTop: 10,
                borderRadius: 20,
                overflow: "hidden"
              }}
            >
              <Image
                source={require("./../../assets/images/grow.jpg")}
                style={{
                  resizeMode: "cover",
                  width: undefined,
                  height: undefined,
                  flex: 1
                }}
              />
            </View>
            <View style={{ flexDirection: "column", height: 110 }}>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 16,
                  color: "#FFA7A7"
                }}
              >
                Inspiration
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 14,
                  marginTop: -5
                }}
              >
                Lorem Ipsum dolor sit amet
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 14,
                  marginTop: 20,
                  color: "#9C9C9C"
                }}
              >
                March 12, 2020
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
