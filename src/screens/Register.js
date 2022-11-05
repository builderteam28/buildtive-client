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

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
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
    dispatch(createUser(registerData));
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
          <TextInput
            selectionColor={"#FFC536"}
            style={styles.textInput}
            placeholder="Username"
            onChangeText={(text) => handleChange("username", text)}
          />
          <TextInput
            secureTextEntry={true}
            selectionColor={"#FFC536"}
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(text) => handleChange("password", text)}
          />
          <TextInput
            selectionColor={"#FFC536"}
            style={styles.textInput}
            placeholder="Full Name"
            onChangeText={(text) => handleChange("fullName", text)}
          />
          <TextInput
            selectionColor={"#FFC536"}
            style={styles.textInput}
            placeholder="Phone Number"
            onChangeText={(text) => handleChange("phoneNumber", text)}
          />
          <TextInput
            selectionColor={"#FFC536"}
            style={styles.textInput}
            placeholder="Address"
            onChangeText={(text) => handleChange("address", text)}
          />
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
  textInput: {
    width: 300,
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    backgroundColor: "transparent",
    marginBottom: 24,
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