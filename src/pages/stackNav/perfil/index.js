import Icon from "@expo/vector-icons/EvilIcons";
import IconAwesome from "@expo/vector-icons/FontAwesome";
import IconMaterial from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { DynamicValue, useDynamicStyleSheet } from "react-native-dark-mode";
import { RectButton } from "react-native-gesture-handler";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import LogsTab2 from "../../screens/components/Logs";
import Courses from "../../screens/components/MyCourses/MyCourses";
import Post from "../../screens/components/Post/Post";
import dynamicStyles from "./style";

const initialLayout = { width: Dimensions.get("window").width };

const Spots = () => (
  <View style={[TabStyle.tabControl]}>
    <Post />
  </View>
);
const MyCourses = () => (
  <View style={[TabStyle.tabControl]}>
    <Courses />
  </View>
);

const Logs = () => (
  <View style={[TabStyle.tabControl]}>
    <LogsTab2 />
  </View>
);

const Responsables = () => <View style={[TabStyle.tabControl]}></View>;

function App({ navigation }) {
  const styles = useDynamicStyleSheet(dynamicStyles);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "courses", title: "My Courses" },
    { key: "spots", title: "Spots" },
    { key: "logs", title: "Logs" },
    { key: "responsables", title: "Responsables" }
  ]);

  const renderScene = SceneMap({
    courses: MyCourses,
    spots: Spots,
    logs: Logs,
    responsables: Responsables
  });

  const renderTabBar = props => (
    <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{ marginHorizontal: 20 }}
    >
      <TabBar
        {...props}
        indicatorStyle={{
          backgroundColor: "#FFA185",
          color: "#f22",
          labelStyle: "#FFA185",
          borderRadius: 20,
          padding: 1.5
        }}
        inactiveColor={"#aaa"}
        style={{
          backgroundColor: "transparent",
          height: 50,
          width: 450,
          elevation: 0
        }}
        labelStyle={{
          color: labelStyle,
          fontSize: 10,
          fontFamily: "Poppins-SemiBold",
          textTransform: "capitalize"
        }}
      />
    </ScrollView>
  );
  const labelStyle = useDynamicStyleSheet(new DynamicValue("#222", "#fafafa"));
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <Icon
              name={"chevron-left"}
              size={50}
              color={"#FFA185"}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <View style={styles.profileImg}>
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
            <RectButton
              style={{
                top: "-70%",
                right: "-14%",
                borderRadius: 300,
                width: 60,
                height: 60,
                backgroundColor: "#FFA185",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <IconMaterial name={"chat"} size={25} color={"#fff"} />
            </RectButton>
            <RectButton
              style={{
                top: "-30%",
                right: "-70%",
                borderRadius: 300,
                width: 60,
                height: 60,
                backgroundColor: "#FFA185",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <IconAwesome name={"picture-o"} size={20} color={"#fff"} />
            </RectButton>
          </View>
          <View style={styles.profileInfos}>
            {/* Nome de usuário */}
            <View style={styles.nameSpace}>
              <View>
                <Text style={styles.userName}>Kristia Kepler</Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Poppins-Bold",
                    color: "#FFA185",
                    textAlign: "center"
                  }}
                >
                  @kristinkepler
                </Text>
              </View>
            </View>
            {/* Seguidores */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 25,
                justifyContent: "space-between"
              }}
            >
              <RectButton
                rippleColor={"#bbb"}
                style={{
                  width: "33%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins-Bold",
                    color: labelStyle,
                    fontSize: 15
                  }}
                >
                  254
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    color: labelStyle,
                    opacity: 0.6,
                    fontSize: 11
                  }}
                >
                  Likes
                </Text>
              </RectButton>
              <RectButton
                rippleColor={"#bbb"}
                style={{
                  width: "33%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins-Bold",
                    color: labelStyle,
                    fontSize: 15
                  }}
                >
                  254
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    color: labelStyle,
                    opacity: 0.6,
                    fontSize: 11
                  }}
                >
                  Followers
                </Text>
              </RectButton>
              <RectButton
                rippleColor={"#bbb"}
                style={{
                  width: "33%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins-Bold",
                    color: labelStyle,
                    fontSize: 15
                  }}
                >
                  254
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    color: labelStyle,
                    opacity: 0.6,
                    fontSize: 11
                  }}
                >
                  Following
                </Text>
              </RectButton>
            </View>
          </View>
          {/* Informações */}
          <View style={styles.userInfos}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="location" size={20} color={labelStyle} />
              <Text style={styles.userInfosText}>
                Carhué, Buenos Aires, Ar.
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15
              }}
            >
              <IconAwesome
                name="birthday-cake"
                size={10}
                color={labelStyle}
                style={{ marginHorizontal: "2%" }}
              />
              <Text style={styles.userInfosText}>12 de Octubre de 2001.</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15
              }}
            >
              <Icon name="calendar" size={20} color={labelStyle} />
              <Text style={styles.userInfosText}>
                Se unió en Julio de 2017.
              </Text>
            </View>
          </View>
          {/* Tab */}
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default App;

const TabStyle = StyleSheet.create({
  tabControl: {
    // height: 210,
    paddingHorizontal: "5%",
    paddingVertical: 15
  }
});
