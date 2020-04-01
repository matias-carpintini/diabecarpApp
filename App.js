import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MyStack from "./src/pages/routes";

const MyTheme = {
  dark: false,
  colors: {
    primary: "#FFF",
    background: "#FAFAFA",
    card: "#000",
    border: "#fff"
  }
};

export default function Diabecarp() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyStack />
    </NavigationContainer>
  );
}
