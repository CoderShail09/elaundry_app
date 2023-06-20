import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Alert } from "react-native";
import { Image, Box, Text, Center, ScrollView, Button } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native";

interface NavigationProps {
  navigation?: any;
}

const Welcome = ({ navigation }: NavigationProps) => {

  const [email, setEmail] = useState('')
  

  const handleEmailChange = (text: React.SetStateAction<string>) => {
    setEmail(text);
  };

  const handleEmailValidation = () => {
    // Email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
      Alert.alert('Error', 'Please enter an email address');
    } else if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address🔒🔒');
    } else {
      Alert.alert('Success', 'Email is valid Login Succesfull🔑🔑');
      navigation.navigate("Homepage")
      
      
      
      
    }
  };


  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
       
            }}
          >
            <AntDesign
              name="left"
              size={24}
              color="#5D7EFC"
              style={{ marginTop: 30, marginLeft: 20 }}
            />

            <Image
              alt="ios-notifications-outline"
              height="22px"
              width="22px"
              source={require("../assets/Photos/Vector.png")}
              style={{ marginTop: 30, marginRight: 50 }}
            />
          </Box>

          <Box style={{ marginTop: 50, marginRight: 20 }}>
            <Image
              alt="logo"
              margin="auto"
              height="115px"
              source={require("../assets/Photos/elaundry.png")}
              width="250px"
            />
            <Box marginTop="7px" marginLeft="41px" marginRight="41px">
              <Image
                alt="image-2"
                source={require("../assets/Photos/pngwing.png")}
                margin="auto"
                width="345px"
                height="329px"
              />
            </Box>
          </Box>
          <View
            style={{
              marginTop: 15,
            }}
          >
            <Center>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 35,
                  lineHeight: 35,
                  fontWeight: "bold",
                  color: "#002B6B",
                }}
              >
                Get top
              </Text>
              <Text
                style={{
                  marginRight: 20,
                  fontSize: 35,
                  lineHeight: 35,
                  fontWeight: "700",
                  color: "#002B6B",
                }}
              >
                washing facilities
              </Text>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight:20
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    lineHeight: 23,
                    fontWeight: "500",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#878686",
                  }}
                >
                  We care about our customer first.
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    lineHeight: 23,
                    fontWeight: "500",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#878686",
                  }}
                >
                  After submitting order, we will pickup your
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    lineHeight: 23,
                    fontWeight: "500",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#878686",
                  }}
                >
                  clothes as you set the time
                </Text>
              </View>
            </Center>
          </View>

          <View style={{ marginTop: 20, marginLeft: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Username</Text>
          </View>
          <View style={{ display: "flex" }}>
            <Box
              style={{ display: "flex", flexDirection: "row", marginLeft: 10 }}
            >
              <TextInput
                style={styles.input}
                placeholder="Enter your username"
                keyboardType="ascii-capable"
                value={email}
              onChangeText={handleEmailChange}
              />

            </Box>
          </View>
          <View style={{ marginTop: 20, marginLeft: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "500", }}>Password</Text>
          </View>
          <View style={{ display: "flex" }}>
            <Box
              style={{ display: "flex", flexDirection: "row", marginLeft: 10 }}
            >
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                keyboardType="ascii-capable"
                textContentType="password"
              />

            </Box>
          </View>


          <Box style={{ display: "flex" }}>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                gap: 10,
                marginLeft: 19,
              }}
            >
              <Button
                
                variant="solid"
                width="174px"
                height="45px"
                colorScheme=""
                borderRadius="7px"
                backgroundColor="#D9D9D9"
                
              >
                <Text style={{fontSize:20,lineHeight:17,fontWeight:"bold",color:"#5D7EFC"}}>Logout</Text>
              </Button>
              <Button
                
                variant="solid"
                backgroundColor="#5D7EFC"
                width="174px"
                height="45px"
                borderRadius="7px"
                onPress={handleEmailValidation}

                
              >
                <Text style={{fontSize:20,lineHeight:20,color:"#FFFFFF",fontWeight:"bold"}}>Submit</Text>
              </Button>
            </View>
          </Box>          


        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f1f6",
   
    height: 990,
    width: 428,
    overflow: "scroll",
  },
  input: {
    marginTop: 10,
    fontSize: 18,
    height: 45,
    textAlign: "center",
    width: 350,
    padding: 8,
    color: "#000000",
    backgroundColor: "#DCDCDE",
    borderRadius: 10,
    marginLeft: 10,
  },
});
export default Welcome;







              {/* <View
                style={{
                  width: 48,
                  marginLeft: 5,
                  marginTop: 9,
                  height: 60,
                }}
              >
                <Button
                  onPress={() => {
                    navigation.navigate("Homepage");
                  }}
                  variant="outline"
                  height="52"
                  width="10"
                  borderRadius="lg"
                  backgroundColor="#003566"
                >
                  <Text style={{ fontSize: 25, color: "white" }}>{">"}</Text>
                </Button>
              </View> */}