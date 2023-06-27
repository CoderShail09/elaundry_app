import React from "react";
import { View, Text, Box, ScrollView } from "native-base";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { SafeAreaView,TouchableOpacity } from "react-native";
import { styles } from "../Components/Styles/welcome";



interface NavigationProps {
  navigation?: any;
}

const AccountInfo = ({navigation}:NavigationProps)  => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Box
            style={{
              marginLeft: 5,
              marginTop: 30,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={()=> {navigation.navigate("Pickup")}} >
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
                Account Info
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  color: "#000000",
                }}
              >
                Customer Account Info
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
              marginTop: 30,
              marginLeft: 22,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 6,
                width: 165,
                height: 38,
                borderColor: "#FFFF",
                borderStyle: "solid",
                borderWidth: 1,
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 6,
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 15, fontWeight: "400" }}
              >
                Name : Aksha Tiyagi
              </Text>
            </View>
            <View
              style={{
                marginLeft: 8,
                width: 165,
                height: 38,
                borderColor: "#FFFF",
                borderStyle: "solid",
                borderWidth: 1,
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 6,
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 15, fontWeight: "400" }}
              >
                Mobile : 9870765790
              </Text>
            </View>
          </Box>

          <Box
            style={{
              width: 340,
              height: 340,
              borderColor: "#D9D9D9",
              borderStyle: "solid",
              borderWidth: 1,
              marginTop: 20,
              marginLeft: 26,
              marginRight: 26,
              paddingLeft: 11,
              paddingRight: 11,
              backgroundColor:"#D9D9D9",
              
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width:310,
                height:40,
                borderColor: "#CDCACA",
                borderStyle: "solid",
                borderWidth: 1,
                backgroundColor:"#CDCACA",
                marginTop:13
                
              }}
            >
              <View style={{width:109,height:40,marginTop:7,marginLeft:30}}>
                <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>Wallet Status</Text>
              </View>
              <View style={{width:50,height:45,marginTop:7,marginRight:30}}>
                <Text style={{color:'#002B6B', fontSize:16, fontWeight:"400"}}>Active</Text>
              </View>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width:310,
                height:40,
                borderColor: "#CDCACA",
                borderStyle: "solid",
                borderWidth: 1,
                backgroundColor:"#CDCACA",
                marginTop:13
                
              }}
            >
              <View style={{width:109,height:40,marginTop:7,marginLeft:30}}>
                <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>Credit Limit</Text>
              </View>
              <View style={{width:50,height:45,marginTop:7,marginRight:30}}>
                <Text style={{color:'#002B6B', fontSize:16, fontWeight:"400"}}>0</Text>
              </View>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width:310,
                height:40,
                borderColor: "#CDCACA",
                borderStyle: "solid",
                borderWidth: 1,
                backgroundColor:"#CDCACA",
                marginTop:13
                
              }}
            >
              <View style={{width:109,height:40,marginTop:7,marginLeft:30}}>
                <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>Available Limit</Text>
              </View>
              <View style={{width:50,height:45,marginTop:7,marginRight:30}}>
                <Text style={{color:'#002B6B', fontSize:16, fontWeight:"400"}}>0</Text>
              </View>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width:310,
                height:40,
                borderColor: "#CDCACA",
                borderStyle: "solid",
                borderWidth: 1,
                backgroundColor:"#CDCACA",
                marginTop:13
                
              }}
            >
              <View style={{width:109,height:40,marginTop:7,marginLeft:30}}>
                <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>Balance Unit</Text>
              </View>
              <View style={{width:50,height:45,marginTop:7,marginRight:30}}>
                <Text style={{color:'#002B6B', fontSize:16, fontWeight:"400"}}>0</Text>
              </View>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width:310,
                height:40,
                borderColor: "#CDCACA",
                borderStyle: "solid",
                borderWidth: 1,
                backgroundColor:"#CDCACA",
                marginTop:13
                
              }}
            >
              <View style={{width:109,height:40,marginTop:7,marginLeft:30}}>
                <Text style={{color:"#000000",fontSize:16,fontWeight:"bold"}}>Advance Limit</Text>
              </View>
              <View style={{width:50,height:45,marginTop:7,marginRight:30}}>
                <Text style={{color:'#002B6B', fontSize:16, fontWeight:"400"}}>0</Text>
              </View>
            </Box>
           
          </Box>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default AccountInfo;
