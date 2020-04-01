import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useDynamicStyleSheet } from "react-native-dark-mode";
import { RectButton } from "react-native-gesture-handler";
// import { Container } from './styles';
import dynamicStyles from "./styles";

const { width: WIDTH, height: HEIGTH } = Dimensions.get("window");

function Course() {
  const styles = useDynamicStyleSheet(dynamicStyles);

  return (
    <View style={{ marginBottom: 100 }}>
      <Text style={styles.topusersText}>Top Users</Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        snapToInterval={360}
        snapToAlignment={"center"}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ maxHeight: 140 }}
      >
        <RectButton
          rippleColor={"pink"}
          style={{
            marginTop: 10,
            backgroundColor: "#393939",
            width: WIDTH * 0.3,
            height: HEIGTH * 0.16,
            borderRadius: 20
          }}
        >
          <Image
            source={require("./../../../../assets/images/musk.jpg")}
            style={{
              resizeMode: "cover",
              width: undefined,
              height: 230,
              flex: 1,
              opacity: 0.7,
              borderRadius: 20
            }}
          />
        </RectButton>
        <RectButton
          rippleColor={"pink"}
          style={{
            marginTop: 10,
            marginLeft: 20,
            backgroundColor: "#393939",
            width: WIDTH * 0.3,
            height: HEIGTH * 0.16,
            borderRadius: 20
          }}
        >
          <Image
            source={require("./../../../../assets/images/gorro.jpg")}
            style={{
              resizeMode: "cover",
              width: undefined,
              height: 230,
              flex: 1,
              opacity: 0.7,
              borderRadius: 20
            }}
          />
        </RectButton>
        <RectButton
          rippleColor={"pink"}
          style={{
            marginTop: 10,
            marginLeft: 20,
            backgroundColor: "#393939",
            width: WIDTH * 0.3,
            height: HEIGTH * 0.16,
            borderRadius: 20
          }}
        >
          <Image
            source={require("./../../../../assets/images/dreamer.jpg")}
            style={{
              resizeMode: "cover",
              width: undefined,
              height: 230,
              flex: 1,
              opacity: 0.7,
              borderRadius: 20
            }}
          />
        </RectButton>
      </ScrollView>
      <Text style={styles.newsText}>News</Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        snapToInterval={360}
        snapToAlignment={"center"}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ maxHeight: 300 }}
      >
        <RectButton
          rippleColor={"pink"}
          style={{
            marginTop: 10,
            backgroundColor: "#F65A5A",
            width: WIDTH * 0.45,
            height: WIDTH * 0.65,
            borderRadius: 10
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
            Effectives methods to get better at UdasdsI Design
          </Text>
          <Image
            source={require("./../../../../assets/images/bookmark.png")}
            style={{
              width: 30,
              height: 30,
              bottom: 0,
              position: "absolute",
              margin: 16
            }}
          />
          <Image source={require("./../../../../assets/images/bookmark.png")} />
        </RectButton>

        <View
          style={{
            marginTop: 10,
            marginLeft: 18,
            backgroundColor: "#fff",
            width: WIDTH * 0.4,
            height: WIDTH * 0.65,
            borderRadius: 10,
            overflow: "hidden",
            justifyContent: "center"
          }}
        >
          <Image
            source={require("./../../../../assets/images/baleia.jpg")}
            style={{
              resizeMode: "cover",
              width: undefined,
              height: 230,
              flex: 1,
              opacity: 0.7
            }}
          />
          <RectButton
            rippleColor={"pink"}
            style={{
              position: "absolute",
              alignSelf: "center",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 60,
              width: 60,
              borderRadius: 40,
              backgroundColor: "#FFF",
              elevation: 9
            }}
          >
            <Image
              source={require("./../../../../assets/images/play.png")}
              style={{ width: 14, height: 15 }}
            />
          </RectButton>
        </View>
      </ScrollView>

      <Text style={styles.popularText}>Popular</Text>

      <View
        rippleColor={"pink"}
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
            backgroundColor: "#4F23FF",
            borderRadius: 20,
            overflow: "hidden"
          }}
        >
          <Image
            source={require("./../../../../assets/images/musk.jpg")}
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
                  color: "#DA8BFF",
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
    </View>
  );
}
export default Course;
