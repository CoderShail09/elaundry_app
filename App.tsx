import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import Welcome from "./Screens/Welcome";
import Homepage from "./Screens/Homepage";
import Offline from "./Screens/Offline";
import Pickup from "./Screens/Pickup";
import StackNavigator from "./Components/StackNavigator";
import Category from "./Screens/Category";
import Services from "./Screens/services";
import Test from "./Screens/Test";
import AccountInfo from "./Screens/AccountInfo";
import OrderDelevery from "./Screens/OrderDelevery";

export default function App() {
  return (
   
     <NativeBaseProvider>
      <StackNavigator/>
     </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
AppRegistry.registerComponent("Welcome", () => Welcome);
