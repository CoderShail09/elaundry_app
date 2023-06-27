import {
  View,
  SafeAreaView,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Box, Text, Button, ScrollView } from "native-base";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface NavigationProps {
  navigation?: any;
}

const NewOrder = ({ navigation }: NavigationProps) => {
  // validation starts here //

  const [mob, setMob] = useState("");
  
  const handleBack = () => {
    navigation.navigate("Homepage");
  };

  const handleMobileValidation = () => {
    // Email regex pattern
    const mobileRegex = /^[0]?[789]\d{9}$/;

    if (mob.length === 0) {
      Alert.alert("Error ❓❓", "Please enter an Customer MobileNumber");
    } else if (!mobileRegex.test(mob)) {
      Alert.alert("Error❓❓", "Please enter a valid Mobile Number");
    } else if (mob.length < 10) {
      Alert.alert("Error❓❓", "Please enter a 10 Digit number");
    } else {
      Alert.alert("Success ✅✅", "Successfully registered");

      navigation.navigate("Pickup");
    }
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{ height: 926, width: 428, backgroundColor: "#F3F1F6" }}>
          <Box
            style={{
              width: 270,
              height: 200,
              display: "flex",
              alignItems: "center",
              top: 300,
              left: 70,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              NEW ORDER BOOKING
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "400", marginTop: 19 }}>
              Customer Mobile No
            </Text>

            <TextInput
              style={[styles.input]}
              placeholder="Customer mobile"
              keyboardType="phone-pad"
              value={mob}
              onChangeText={(text) => setMob(text)}
            />
           
          </Box>
          <Box style={{ display: "flex" }}>
            <View
              style={{
                flexDirection: "row",
                top: 228,
                gap: 5,
                marginLeft: 54,
              }}
            >
              <Button
                variant="solid"
                width="141px"
                height="48px"
                colorScheme="darkText"
                borderRadius="xl"
                backgroundColor="red.600"
                onPress={handleBack}
              >
                <Text style={{ fontSize: 17, color: "#ffff" }}>Cancel</Text>
              </Button>

              <Button
                variant="solid"
                backgroundColor="green.400"
                width="141px"
                height="48px"
                borderRadius="xl"
                onPress={handleMobileValidation}
              >
                SUBMIT
              </Button>
            </View>
          </Box>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    justifyContent: "center",
    marginTop: 7,
    marginLeft: 5,
    fontWeight: "400",
    width: 210,
    height: 36,
    textAlign: "center",
    color: "black",
    backgroundColor: "#DCDCDE",
    borderRadius: 7,
  },
});

export default NewOrder;

const validationSchema = Yup.object({
  password: Yup.string().length(8).required(),
  number: Yup.number()
    .required("Required")
    .max(1000000000000, "Required")
    .min(0, "Not negative number"),
});




