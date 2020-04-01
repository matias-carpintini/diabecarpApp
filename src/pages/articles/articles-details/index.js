import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextArticle } from "./style.js";

export default function Articles({ navigation }) {
  return (
    <View style={{ height: "100%", backgroundColor: "#FFFF", display: "flex" }}>
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
          <TextArticle>Junkfood can make your life soo hard.</TextArticle>
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
    </View>
  );
}
