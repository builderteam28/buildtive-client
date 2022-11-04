import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";

export const Login = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const navigation = useNavigation()
  const handleChange = (name, value) => {
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = () => {
    console.log(loginForm);
  };

  return (
    <View style={{ marginHorizontal: 30, flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ marginLeft: 20, marginBottom: 50 }}>
          <Text style={styles.text}>Log in to</Text>
          <Text style={styles.text}>Your Account</Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="username"
          onChangeText={(text) => handleChange("username", text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="password"
          onChangeText={(text) => handleChange("password", text)}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Button
          title="log in"
          style={{ backgroundColor: "#FFC536", marginBottom: 10 }}
          onPress={handleSubmit}
        />
        <Button
          title="log in with google"
          onPress={() => navigation.navigate("HomeTabNavigation")}
        />
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: "#1B50B7" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    backgroundColor: "transparent",
  },
  text: { fontSize: 20 },
});
