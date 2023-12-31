import React from "react";
import { View, Text, Box, ScrollView } from "native-base";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import {
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

interface NavigationProps {
  navigation?: any;
}

const OrderDelevery = ({ navigation }: NavigationProps) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{ height: 926, width: 428, backgroundColor: "#F3F1F6" }}>
          <Box
            style={{
              marginLeft: 5,
              marginTop: 30,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Homepage");
              }}
            >
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

            <Entypo
              name="dots-three-vertical"
              size={24}
              color="black"
              style={{ marginTop: 30, marginRight: 46 }}
            />
          </Box>
          <Box
            style={{
              width: 300,
              height: 300,
              left: 43,
              top: 100,
            }}
          >
            <Image
              alt="Bell-icon"
              source={require("../assets/Photos/bells.png")}
              style={{ width: 304, height: 304 }}
            />
          </Box>

          <Box
            style={{
              width: 175,
              height: 45,
              left: 100,
              top: 105,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: "#797979",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Nothing here!!
            </Text>
          </Box>
          <Box
            style={{
              width: 304,
              height: 47,
              left: 40,
              top: 105,
              
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#A8A4A4",
                fontWeight: "600",
                textAlign: "center",
                lineHeight:21
              }}
            >
              Tap the notification setting button below and check again{" "}
            </Text>
          </Box>
          <Box style={{width:56,height:21,left:160,top:370}}>
              <Text style={{fontSize:15,color:"#000",textAlign:"center",lineHeight:18}}>Refresh</Text>

              <View style={{width:24,height:24,left:10,top:13}}>
                 <Image alt="Refresh" source={require("../assets/Photos/refresh.png")} />
              </View>
             
          </Box>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default OrderDelevery;
