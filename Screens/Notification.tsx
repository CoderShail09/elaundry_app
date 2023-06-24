import React from "react";
import { View, Text, Box, ScrollView } from "native-base";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView,ImageBackground,Image,TouchableOpacity } from "react-native";

interface NavigationProps {
  navigation?: any;
}

const OrderDelevery= ({navigation}:NavigationProps) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{ height: 926, width: 428, backgroundColor: "#E5E5E5" }}>
          <Box
            style={{
              marginLeft: 5,
              marginTop: 30,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={()=> {navigation.navigate("Homepage")}}>
            <AntDesign
              name="left"
              size={24}
              color="#5D7EFC"
              style={{ marginTop: 30, marginLeft: 10 }}
            />
        </TouchableOpacity>
            <Box
              style={{
                width: 242,
                height: 34,
                marginTop: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  lineHeight: 44,
                  fontWeight: "600",
                  color: "#002B6B",
                }}
              >
                Order Delivery
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  color: "#000000",
                }}
              >
                Select Order to Deliver
              </Text>
            </Box>

            <MaterialIcons name="filter-list-alt" size={35} color="#5D7EFC" 
            style={{ marginTop: 28, marginRight: 46 }}
            />

          </Box>
          

         
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default OrderDelevery;
