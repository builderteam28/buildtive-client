import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import MyProjects from "../screens/MyProjects";
const Tab = createBottomTabNavigator();

export default function HomeTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Projects") {
            iconName = focused ? "briefcase-sharp" : "briefcase-outline";
          }

          return (
            <View style={[styles.tabBarItemContainer]}>
              <Ionicons name={iconName} size={size} color={color} />
              <Text>{route.name}</Text>
            </View>
          );
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.tabBar,
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Projects" component={MyProjects} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FFC536",
    position: "absolute",
    borderColor: "#ffffff",
    height: 70,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
  tabBarItemContainer: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    alignItems: "center",
  },
  title: {
    fontSize: 12,
  },
});
