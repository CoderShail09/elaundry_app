import React from "react";
import { View, Text, Box, ScrollView } from "native-base";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { SafeAreaView,ImageBackground } from "react-native";

function OrderDelevery() {
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
            <AntDesign
              name="left"
              size={24}
              color="#5D7EFC"
              style={{ marginTop: 30, marginLeft: 10 }}
            />

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
                width: 242,
                height: 34,
                marginTop: 36,
                marginLeft:30
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 40,
                  fontWeight: "400",
                  color: "#000000",
                }}
              >
                New location 
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "400",
                  color: "#7C7777",
                }}
              >
               New location found near you
              </Text>
            </Box>
           
           <Box style={{width:350,height:60,marginTop:30,marginLeft:30,display:"flex", flexDirection:"row",justifyContent:"space-between",gap:4}}>
           <View style={{flex:1,backgroundColor:"#143FD6"}}>
                 <ImageBackground source={require('../assets/Photos/city1.png')}>
                  <Text style={{color:"#FFFF",fontSize:13,fontWeight:"600",marginTop:10,marginLeft:10}}>King Street 20</Text>
                  <Text style={{color:"#FFFF",fontSize:13,fontWeight:"400",marginLeft:10}}>Bucharest,London</Text>
                 </ImageBackground>
           </View>
           
           <View style={{flex:1, backgroundColor:"#ED4137"}}>
           <ImageBackground source={require('../assets/Photos/city2.png')}>
           <Text style={{color:"#FFFF",fontSize:13,fontWeight:"600",marginTop:10,marginLeft:10}}>Victory Square,18</Text>
                  <Text style={{color:"#FFFF",fontSize:13,fontWeight:"400",marginLeft:10}}>Bucharest,London</Text>
           </ImageBackground>
           </View>
           
           </Box>

           <Box style={{width:350,height:60,display:"flex",flexDirection:"row",marginTop:10,marginLeft:30,justifyContent:"space-between"}}>
            <View >
              <Text style={{fontSize:14,fontWeight:"600",color:"#000000"}}>Latest Order</Text>
            </View>

            <View >
               <Text style={{color:"#003566",fontSize:14}}>View all orders</Text>
            </View>
           </Box>

           <Box style={{width:350,height:80,borderColor:"#003566",borderStyle:"solid",borderWidth:1,marginLeft:30,display:"flex",flexDirection:"row",borderRadius:11}}>
            <View style={{width:30,height:30,borderColor:"#003566",borderStyle:"solid",borderWidth:1}}></View>

            <View style={{width:140,height:65,borderColor:"#003566",borderStyle:"solid",borderWidth:1,marginLeft:12}}>
              <Text style={{fontSize:14,fontWeight:"400",marginLeft:4}}>Picking Up Order</Text>
              <Text style={{fontSize:10,fontWeight:"400",color:"#646060",marginLeft:4}}>Placed On: <Text style={{color:"#2F2D2D",fontSize:10}}>12th Jan 2023</Text>    </Text>
              <Text style={{fontSize:10,fontWeight:"400",color:"#646060",marginLeft:4}}>Placed At:  <Text style={{color:"#2F2D2D",fontSize:10}}>East Patel Nagar</Text> </Text>
            </View>
            <View style={{width:80,height:60,borderColor:"#003566",borderStyle:"solid",borderWidth:1,marginLeft:80}}>
            <Text style={{fontSize:10,fontWeight:'400',color:"#646060",textAlign:"center"}}>Details</Text>
            <Text style={{fontSize:10,fontWeight:'400',color:"#322F2F",textAlign:"center"}}>Men</Text>
            <Text style={{fontSize:10,fontWeight:'400',color:"#322F2F",textAlign:"center"}}>Household</Text>
            </View> 
           </Box> 

           <Box style={{width:350,height:80,borderColor:"#003566",borderStyle:"solid",borderWidth:1,marginLeft:30,display:"flex",flexDirection:"row",borderRadius:11,marginTop:12}}>
            <View style={{width:30,height:30,borderColor:"#003566",borderStyle:"solid",borderWidth:1}}></View>

            <View style={{width:140,height:65,borderColor:"#003566",borderStyle:"solid",borderWidth:1,marginLeft:12}}>
              <Text style={{fontSize:14,fontWeight:"400",marginLeft:4}}>Picking Up Order</Text>
              <Text style={{fontSize:10,fontWeight:"400",color:"#646060",marginLeft:4}}>Placed On: <Text style={{color:"#2F2D2D",fontSize:10}}>12th Jan 2023</Text>    </Text>
              <Text style={{fontSize:10,fontWeight:"400",color:"#646060",marginLeft:4}}>Placed At:  <Text style={{color:"#2F2D2D",fontSize:10}}>East Patel Nagar</Text> </Text>
            </View>
            <View style={{width:80,height:60,borderColor:"#003566",borderStyle:"solid",borderWidth:1,marginLeft:80}}>
            <Text style={{fontSize:10,fontWeight:'400',color:"#646060",textAlign:"center"}}>Details</Text>
            <Text style={{fontSize:10,fontWeight:'400',color:"#322F2F",textAlign:"center"}}>Men</Text>
            <Text style={{fontSize:10,fontWeight:'400',color:"#322F2F",textAlign:"center"}}>Household</Text>
            </View> 
           </Box> 

           

         
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default OrderDelevery;
