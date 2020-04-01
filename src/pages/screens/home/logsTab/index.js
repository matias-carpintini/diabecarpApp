import React, { useState } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import { useDarkMode, useDynamicStyleSheet } from "react-native-dark-mode";
import Timeline from "react-native-timeline-flatlist";
import dynamicStyles from "./style";

const { width: WIDTH, height: HEIGTH } = Dimensions.get("window");
// import { Container } from './styles';

function LogsTab() {
  const styles = useDynamicStyleSheet(dynamicStyles);
  const [list, setList] = useState([
    {
      time: (
        <Text
          style={{ fontFamily: "Poppins-Medium", color: "#FFF", fontSize: 11 }}
        >
          19pm
        </Text>
      ),
      title: <Text style={styles.timeLineTitle}>Today</Text>,
      description: (
        <Text style={styles.timelineDescription}>
          123mg/dl, 40gr carbs, 3U.Clase 5 y 6 del curso X...
        </Text>
      )
    },
    {
      time: (
        <Text
          style={{ fontFamily: "Poppins-Medium", color: "#FFF", fontSize: 11 }}
        >
          16pm
        </Text>
      ),
      title: <Text style={styles.timeLineTitle}>Yesterday</Text>,
      description: (
        <Text style={styles.timelineDescription}>
          123mg/dl, 40gr carbs, 3U.Clase 5 y 6 del curso X...
        </Text>
      )
    },
    {
      time: (
        <Text
          style={{ fontFamily: "Poppins-Medium", color: "#FFF", fontSize: 11 }}
        >
          09am
        </Text>
      ),
      title: <Text style={styles.timeLineTitle}>Yesterday</Text>,
      description: (
        <Text style={styles.timelineDescription}>
          123mg/dl, 40gr carbs, 3U.Clase 5 y 6 del curso X...
        </Text>
      )
    }
  ]);

  const isDarkMode = useDarkMode();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ bottom: 25 }}>
      <View style={{ marginBottom: 100 }}>
        <Text style={styles.postsText}>
          This, <Text style={{ color: "#FF99AB" }}>Week</Text>
        </Text>
        <Timeline
          data={list}
          circleSize={20}
          circleColor={isDarkMode ? "#FF99AB" : "#FF99AB"}
          lineColor="#FF99AB"
          timeContainerStyle={{ minWidth: 52, marginTop: 0 }}
          timeStyle={{
            textAlign: "center",
            backgroundColor: "#FF99AB",
            color: "white",
            padding: 5,
            borderRadius: 20
          }}
          descriptionStyle={{ color: "white" }}
          options={{
            style: { paddingTop: 30 }
          }}
        />
      </View>
    </ScrollView>
  );
}

export default LogsTab;

//LIB
//https://www.npmjs.com/package/react-native-timeline-flatlist
