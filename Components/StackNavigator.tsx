import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Welcome from '../Screens/Welcome'
import Homepage from '../Screens/Homepage'
import Offline from '../Screens/Offline'
import Pickup from '../Screens/Pickup'
import Category from '../Screens/Category'
import Services from '../Screens/Service'
import AccountInfo from '../Screens/AccountInfo'
import OrderDelevery from '../Screens/OrderDelevery'
import NewOrder from '../Screens/NewOrder'
import PickupFilter from '../Screens/PIckupFilter'
import Notification from '../Screens/Notification'
import PickupDate from '../Screens/PickupDate'


const StackNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
 <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Welcome"  component={Welcome} options={{headerShown:false}}   />
    <Stack.Screen name="Homepage"  component={Homepage} options={{headerShown:false}}   />
    <Stack.Screen name="Offline"  component={Offline} options={{headerShown:false}}   />
    <Stack.Screen name="Pickup"  component={Pickup} options={{headerShown:false}}   />
    <Stack.Screen name="Category"  component={Category} options={{headerShown:false}}   />
    <Stack.Screen name="Accountinfo"  component={AccountInfo} options={{headerShown:false}}   />
    <Stack.Screen name="OrderDelevery"  component={OrderDelevery} options={{headerShown:false}}   />
    <Stack.Screen name="NewOrder"  component={NewOrder} options={{headerShown:false}}   />
    <Stack.Screen name="PickupFilter"  component={PickupFilter} options={{headerShown:false}}   />
    <Stack.Screen name="Notification"  component={Notification} options={{headerShown:false}}   />
    <Stack.Screen name="PickupDate"  component={PickupDate} options={{headerShown:false}}   />
    <Stack.Screen name="Services"  component={Services} options={{headerShown:false}}   />
         
    </Stack.Navigator>
 </NavigationContainer>
  )
}

export default StackNavigator


