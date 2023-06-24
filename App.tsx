import React from "react";
import { AppRegistry, } from "react-native";
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
import NewOrder from "./Screens/NewOrder";
import Notification from "./Screens/Notification";
import NewSwipe from "./Screens/NewSwipe";
import PickupFilter from "./Screens/PIckupFilter";

export default function App() {
  return (
    <NativeBaseProvider>
      <StackNavigator/>
    </NativeBaseProvider>
  );
}


AppRegistry.registerComponent("Welcome", () => Welcome);
