import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {
  DynamicStyleSheet,
  DynamicValue,
  useDarkMode,
  useDarkModeContext,
  useDynamicStyleSheet
} from "react-native-dark-mode";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import ArticlesTab from "./articlesTab";
import CoursesTab from "./coursesTab";
//screens
import Homee from "./home_unique";
import LogsTab from "./logsTab";
import RecipesTab from "./recipesTab";
import styless from "./style";
console.disableYellowBox = true;

const initialLayout = { width: Dimensions.get("window").width };

const { width: WIDTH, height: HEIGTH } = Dimensions.get("window");

const backgroundColors = {
  light: "#FFF",
  dark: "#12121B"
};

const dynamicStyles = new DynamicStyleSheet({
  container: {
    backgroundColor: new DynamicValue("#FFF", "#12121B")
  },
  text: {
    color: new DynamicValue("#000", "#FFF"),
    fontFamily: "Poppins-SemiBold",
    marginLeft: "15%",
    marginTop: 24,
    fontSize: 20,
    marginBottom: 0
  }
});

const Spots = () => (
  <ScrollView style={[styless.tabControl]}>
    <Homee />
  </ScrollView>
);
const Articles = () => (
  <ScrollView style={[styless.tabControl]}>
    <ArticlesTab />
  </ScrollView>
);

const Recipes = () => (
  <View style={[styless.tabControl]}>
    <RecipesTab />
  </View>
);
const Courses = ({ navigation }) => (
  <View style={[styless.tabControl]}>
    <CoursesTab />
  </View>
);
const Logs = () => (
  <View style={[styless.tabControl]}>
    <LogsTab />
  </View>
);

function Home({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "spots", title: "Home" },
    { key: "articles", title: "Blogs" },
    { key: "recipes", title: "Recipes" },
    { key: "courses", title: "Courses" },
    { key: "logs", title: "Logs" }
  ]);

  const renderScene = SceneMap({
    spots: Spots,
    articles: Articles,
    recipes: Recipes,
    courses: Courses,
    logs: Logs
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: "#FF6F6F",
        color: "#f22",
        borderRadius: 20,
        padding: 1.7,
        alignContent: "flex-start"
      }}
      indicatorContainerStyle={{ backgroundColor: "# 12121B" }}
      inactiveColor={"#222"}
      scrollEnabled={true}
      style={{
        backgroundColor: new DynamicValue("#FFF", "#12121B"),
        height: 55,
        width: "100%",
        elevation: 0,
        marginLeft: 0
      }}
      labelStyle={{
        color: "#A0A0A0",
        fontSize: 13,
        fontFamily: "Poppins-SemiBold",
        textTransform: "capitalize",
        textAlign: "left"
      }}
    />
  );
  const styles = useDynamicStyleSheet(dynamicStyles);
  const mode = useDarkModeContext();
  const isDarkMode = useDarkMode();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={isDarkMode ? "#12121B" : "#FFFFFF"}
      />
      <View style={(styles.container, { height: "100%" })}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Perfil");
            }}
            style={{ marginTop: "5%", marginBottom: "4%", marginLeft: "5%" }}
          >
            <View style={styless.profileImg}>
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
          </TouchableOpacity>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.text}>Kristina</Text>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                color: "#959595",
                marginLeft: "15%",
                marginTop: -8,
                fontSize: 12
              }}
            >
              Top user <Entypo name="star" color="#C28E51" />
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <TouchableOpacity style={{ marginLeft: "20%" }}>
              <Ionicons
                name="ios-chatbubbles"
                onPress={() => {
                  navigation.navigate("Chat");
                }}
                color="#969696"
                size={28}
                style={{ marginLeft: "10%" }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="ios-search" color="#969696" size={32} />
            </TouchableOpacity>
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

        {/* Tab */}
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;

// "dependencies": {
//     "react": "16.9.0",
//     "react-native": "0.61.5",
//     "react-native-gesture-handler": "^1.6.0",
//     "react-native-reanimated": "^1.7.0",
//     "react-native-tab-view": "^2.13.0",
//     "react-native-vector-icons": "^6.6.0"
//   },
