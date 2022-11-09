import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getLocation } from "../store/actions/userActions";
import HeaderTab from "../components/HeaderTab";
import ListCategories from "../components/ListCategories";
export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocation());
  }, []);
  return (
    <>
      <View style={{ flex: 1 }}>
        <HeaderTab />
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 24, marginBottom: "4%" }}>
            Welcome to our app
          </Text>
          <View style={styles.content}>
            <View>
              <Image
                style={{ height: "100%", width: 150 }}
                resizeMode={"cover"}
                source={require("../assets/BobTheBuilder.jpg")}
              />
            </View>
            <View style={{ flex: 1, padding: "5%" }}>
              <View style={{ marginBottom: "16%" }}>
                <Text style={{ fontSize: 24 }}>Best Helping Hand for You</Text>
                <Text>
                  We make sure excellent services through our expert workers
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  paddingRight: 12,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("FormProject")}
                  style={styles.buttonBook}>
                  <Text>Book Now!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <ListCategories />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    width: "95%",
    height: 200,
    overflow: "hidden",
    backgroundColor: "#FFC536",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  buttonBook: {
    backgroundColor: "white",
    borderRadius: 25,
    borderWidth: 1,
    width: 100,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
