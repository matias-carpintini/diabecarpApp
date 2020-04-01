import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { useDynamicStyleSheet } from "react-native-dark-mode";
import { RectButton } from "react-native-gesture-handler";
import dynamicStyles from "./style";

const { width: WIDTH, height: HEIGTH } = Dimensions.get("window");

// import { Container } from './styles';

function ArticlesTab() {
  const styles = useDynamicStyleSheet(dynamicStyles);

  return (
    <View style={{ marginBottom: 100 }}>
      <Text style={styles.postsText}>Posts for you</Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        snapToInterval={340}
        snapToAlignment={"center"}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ maxHeight: "100%" }}
      >
        <RectButton rippleColor={"pink"} style={styles.popularPosts}>
          <Image
            source={require("./../../../../assets/images/gorro.jpg")}
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
            source={require("./../../../../assets/images/bookmark.png")}
            style={{
              width: 30,
              height: 30,
              bottom: 0,
              position: "absolute",
              margin: 16
            }}
          />
        </RectButton>
        <RectButton rippleColor={"pink"} style={styles.popularPosts}>
          <Image
            source={require("./../../../../assets/images/article.png")}
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
            source={require("./../../../../assets/images/bookmark.png")}
            style={{
              width: 30,
              height: 30,
              bottom: 0,
              position: "absolute",
              margin: 16
            }}
          />
        </RectButton>

        <RectButton rippleColor={"pink"} style={styles.popularPosts}>
          <Image
            source={require("./../../../../assets/images/bloodtest.jpg")}
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
            source={require("./../../../../assets/images/bookmark.png")}
            style={{
              width: 30,
              height: 30,
              bottom: 0,
              position: "absolute",
              margin: 16
            }}
          />
        </RectButton>
      </ScrollView>
      <Text style={styles.postsText}>Most Popular</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            height: 100,
            width: 100,
            marginTop: 25,
            borderRadius: 20,
            overflow: "hidden"
          }}
        >
          <Image
            source={require("./../../../../assets/images/astolfo.jpg")}
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
              color: "#FFA7A7",
              marginTop: "7%",
              marginLeft: "6%"
            }}
          >
            Inspiration
          </Text>
          <Text style={styles.postsPopText}>Title: You can win the diabet</Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 14,
              marginTop: 20,
              color: "#9C9C9C",
              marginLeft: "6%"
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
            marginTop: 25,
            borderRadius: 20,
            overflow: "hidden"
          }}
        >
          <Image
            source={require("./../../../../assets/images/oldpeople.jpg")}
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
              color: "#FFA7A7",
              marginTop: "7%",
              marginLeft: "6%"
            }}
          >
            Health
          </Text>
          <Text style={styles.postsPopText}>Title: Take care of you life</Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 14,
              marginTop: 20,
              color: "#9C9C9C",
              marginLeft: "6%"
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
            marginTop: 25,
            borderRadius: 20,
            overflow: "hidden"
          }}
        >
          <Image
            source={require("./../../../../assets/images/grow.jpg")}
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
              color: "#FFA7A7",
              marginTop: "7%",
              marginLeft: "6%"
            }}
          >
            Inspiration
          </Text>
          <Text style={styles.postsPopText}>Lorem Ipsum dolor sit amet</Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 14,
              marginTop: 20,
              color: "#9C9C9C",
              marginLeft: "6%"
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
            marginTop: 25,
            borderRadius: 20,
            overflow: "hidden"
          }}
        >
          <Image
            source={require("./../../../../assets/images/grow.jpg")}
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
              color: "#FFA7A7",
              marginTop: "7%",
              marginLeft: "6%"
            }}
          >
            Inspiration
          </Text>
          <Text style={styles.postsPopText}>Lorem Ipsum dolor sit amet</Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 14,
              marginTop: 20,
              color: "#9C9C9C",
              marginLeft: "6%"
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
            marginTop: 25,
            borderRadius: 20,
            overflow: "hidden"
          }}
        >
          <Image
            source={require("./../../../../assets/images/grow.jpg")}
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
              color: "#FFA7A7",
              marginTop: "7%",
              marginLeft: "6%"
            }}
          >
            Inspiration
          </Text>
          <Text style={styles.postsPopText}>Lorem Ipsum dolor sit amet</Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 14,
              marginTop: 20,
              color: "#9C9C9C",
              marginLeft: "6%"
            }}
          >
            March 12, 2020
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ArticlesTab;
