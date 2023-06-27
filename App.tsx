import { AppRegistry, } from "react-native";
import React from 'react'
import { NativeBaseProvider } from "native-base";
import Welcome from "./Screens/Welcome";
import Homepage from "./Screens/Homepage";
import Offline from "./Screens/Offline";
import Pickup from "./Screens/Pickup";
import StackNavigator from "./Components/StackNavigator";
import Category from "./Screens/Category";
import Services from "./Screens/services";
import AccountInfo from "./Screens/AccountInfo";
import OrderDelevery from "./Screens/OrderDelevery";
import NewOrder from "./Screens/NewOrder";
import Notification from "./Screens/Notification";
import PickupFilter from "./Screens/PIckupFilter";
import PickupDate from "./Screens/PickupDate";


export default function App() {
  return (
    <NativeBaseProvider>
      <StackNavigator/>
    </NativeBaseProvider>
  );
}


AppRegistry.registerComponent("Welcome", () => Welcome);
