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
import { loginUser } from "../store/actions/userActions";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleChange = (name, value) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(loginUser(loginData));
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 80 }}>
        <View style={styles.loginTitle}>
          <Text style={styles.text}>Log in to</Text>
          <Text style={styles.text}>
            Your <Text style={{ color: "#FFC536" }}>BuildHub</Text> Account
          </Text>
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
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.loginButton}>
            <Text>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeTabNavigation")}
            style={styles.googleButton}>
            <Text>Login with Google</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={{ fontSize: 16 }}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ fontSize: 16, color: "#1B50B7" }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  loginTitle: {
    marginBottom: 60,
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
    marginBottom: 20,
  },
  loginButton: {
    width: 250,
    paddingVertical: 10,
    backgroundColor: "#FFC536",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFC536",
    marginBottom: 15,
    marginTop: 50,
  },
  googleButton: {
    width: 250,
    paddingVertical: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
  },
  text: { fontSize: 36, fontWeight: "500", textAlign: "center" },
  registerContainer: { alignItems: "center", marginTop: 30 },
});
