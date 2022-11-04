import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  Text,
  TextInput,
} from "react-native";

export const Register = () => {
  return (
    <View style={{ marginHorizontal: 30, flex: 1 }}>
      <View style={{ flex: 1, marginTop: 80 }}>
        <View style={{ marginHorizontal: 20, marginBottom: 50 }}>
          <Text style={{ fontSize: 20 }}>Create User Account</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: { fontSize: 15, borderBottomWidth: 1, borderBottomColor: "black" },
});
