import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/userActions";
import { MaterialIcons } from "@expo/vector-icons";
import { colors, fonts } from "../helpers/theme";
export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleChange = (name, value) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(loginUser(loginData)).then((data) => {
      if (data) navigation.replace("HomeTabNavigation");
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: "10%",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <View style={styles.image}>
          <Image source={require("../assets/logo.png")} resizeMode={"center"} />
        </View>
        <View style={styles.loginTitle}>
          <Text style={styles.text}>Log in to</Text>
          <Text style={styles.text}>
            Your <Text style={{ color: colors.primary }}>BuildHub</Text> Account
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.textInputContainer}>
            <MaterialIcons name="email" size={20} color={colors.black} />
            <View style={{ justifyContent: "center", marginLeft: 6 }}>
              <Text style={styles.titleInput}>Email</Text>
              <TextInput
                selectionColor={colors.primary}
                style={styles.textInput}
                placeholder="Email"
                onChangeText={(text) => handleChange("email", text)}
              />
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <MaterialIcons name="lock" size={20} color={colors.black} />
            <View style={{ justifyContent: "center", marginLeft: 6 }}>
              <Text style={styles.titleInput}>Password</Text>
              <TextInput
                secureTextEntry={true}
                selectionColor={colors.primary}
                style={styles.textInput}
                placeholder="Password"
                onChangeText={(text) => handleChange("password", text)}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.loginButton}>
            <Text style={{ fontFamily: fonts.regular }}>Log In</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={{ fontSize: 16, fontFamily: fonts.semiBold }}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#1B50B7",
                  fontFamily: fonts.semiBold,
                }}>
                Sign Up
              </Text>
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
  image: {
    width: 100,
    height: 100,
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
  textInput: {
    width: 280,
    height: 20,
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    backgroundColor: "transparent",
    fontFamily: fonts.regular,
  },
  titleInput: {
    color: colors.gray,
    fontSize: 10,
    fontFamily: fonts.medium,
  },
  loginButton: {
    width: 250,
    paddingVertical: 10,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    marginBottom: 15,
    marginTop: 50,
  },
  googleButton: {
    width: 250,
    paddingVertical: 10,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
  },
  text: { fontSize: 36, fontFamily: fonts.medium, textAlign: "center" },
  registerContainer: { alignItems: "center", marginTop: 30 },
});
