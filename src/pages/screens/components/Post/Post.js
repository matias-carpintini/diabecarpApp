import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const { width: WIDTH, height: HEIGTH } = Dimensions.get("window");

const Post = () => {
  return (
    <>
      <View
        onPress={() => alert("Navegação aqui")}
        style={{
          marginTop: 10,
          backgroundColor: "#1C1C23",
          width: WIDTH - 50,
          height: HEIGTH * 0.3,
          borderRadius: 20,
          flexDirection: "row"
        }}
      >
        <View
          style={{
            margin: 12,
            height: "90%",
            width: "30%",
            backgroundColor: "#FFCDB1",
            borderRadius: 20,
            overflow: "hidden"
          }}
        >
          <Image
            source={require("././../../../../assets/images/musk.jpg")}
            style={{
              resizeMode: "cover",
              width: undefined,
              height: 230,
              flex: 1,
              opacity: 0.7,
              borderRadius: 20
            }}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => alert("Goes to the Musk Perfil.")}>
              <Text
                style={{
                  marginLeft: 8,
                  marginTop: 16,
                  fontSize: 16,
                  color: "#FFCDB1",
                  fontFamily: "Poppins-SemiBold"
                }}
              >
                Elon Musk
              </Text>
            </TouchableOpacity>
            <Image
              source={require("././../../../../assets/images/heart.png")}
              style={{
                width: 30,
                height: 30,
                alignSelf: "flex-end",
                alignContent: "flex-end",
                marginLeft: "25%",
                marginTop: 15
              }}
            />
          </View>
          <Text
            style={{
              marginLeft: 8,
              marginTop: 5,
              fontSize: 15,
              color: "#fff",
              fontFamily: "Poppins_regular",
              maxWidth: "80%"
            }}
          >
            I can entrepreneur, philanthropist and visionary.
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fafafa"
  },
  engine: {
    position: "absolute",
    right: 0
  },
  container: {
    height: HEIGTH * 0.25,
    backgroundColor: "#eee",
    paddingHorizontal: "5%",
    paddingVertical: 10,
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

export default Post;
