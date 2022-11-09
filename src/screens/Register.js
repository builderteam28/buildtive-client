import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import { createUser } from "../store/actions/userActions";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    address: "",
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleChange = (name, value) => {
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(createUser(registerData)).then((data) => {
      if (data) {
        navigation.navigate("Login");
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 30 }}>
        <View style={styles.registerTitle}>
          <Text style={styles.text}>Create New</Text>
          <Text style={styles.textBuildHub}>BuildHub</Text>
          <Text style={styles.text}>User Account</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.textInputContainer}>
            <MaterialIcons name="email" size={20} color="black" />
            <View style={{ justifyContent: "center", marginLeft: 6 }}>
              <Text style={styles.titleInput}>Email</Text>
              <TextInput
                selectionColor={"#FFC536"}
                style={styles.textInput}
                placeholder="Email"
                onChangeText={(text) => handleChange("email", text)}
              />
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <MaterialIcons name="lock" size={20} color="black" />
            <View style={{ justifyContent: "center", marginLeft: 6 }}>
              <Text style={styles.titleInput}>Password</Text>
              <TextInput
                secureTextEntry={true}
                selectionColor={"#FFC536"}
                style={styles.textInput}
                placeholder="Password"
                onChangeText={(text) => handleChange("password", text)}
              />
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <Ionicons name="person" size={20} color="black" />
            <View style={{ justifyContent: "center", marginLeft: 6 }}>
              <Text style={styles.titleInput}>Full Name</Text>
              <TextInput
                selectionColor={"#FFC536"}
                style={styles.textInput}
                placeholder="Full Name"
                onChangeText={(text) => handleChange("fullName", text)}
              />
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <MaterialIcons name="phone" size={20} color="black" />
            <View style={{ justifyContent: "center", marginLeft: 6 }}>
              <Text style={styles.titleInput}>Phone Number</Text>
              <TextInput
                selectionColor={"#FFC536"}
                style={styles.textInput}
                placeholder="Phone Number"
                onChangeText={(text) => handleChange("phoneNumber", text)}
              />
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <Entypo name="address" size={24} color="black" />
            <View style={{ justifyContent: "center", marginLeft: 6 }}>
              <Text style={styles.titleInput}>Address</Text>
              <TextInput
                selectionColor={"#FFC536"}
                style={styles.textInput}
                placeholder="Address"
                onChangeText={(text) => handleChange("address", text)}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.registerButton}>
            <Text>Create new Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.backButton}>
            <Text>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  registerTitle: {
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: { justifyContent: "center", alignItems: "center" },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  titleInput: {
    color: "gray",
    fontSize: 10,
  },
  textInput: {
    width: 280,
    height: 18,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    backgroundColor: "transparent",
  },
  registerButton: {
    width: 250,
    paddingVertical: 10,
    backgroundColor: "#FFC536",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFC536",
    marginBottom: 15,
    marginTop: 24,
  },
  backButton: {
    width: 250,
    paddingVertical: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
  },
  text: { fontSize: 36, fontWeight: "500", textAlign: "center" },
  textBuildHub: {
    fontSize: 36,
    fontWeight: "500",
    textAlign: "center",
    color: "#FFC536",
  },
});
