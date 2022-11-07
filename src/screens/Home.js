import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getLocation } from "../store/actions/userActions";
import HeaderTab from "../components/HeaderTab";
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
          <Text style={{ fontSize: 24, marginBottom: 16 }}>
            Welcome to our app
          </Text>
          <View
            style={{
              justifyContent: "center",
              alignSelf: "center",
              flexDirection: "row",
              width: "95%",
              height: 200,
              overflow: "hidden",
              backgroundColor: "#FFC536",
              borderTopRightRadius: 25,
              borderBottomRightRadius: 25,
            }}>
            <View>
              <Image
                style={{ height: 200, width: 150 }}
                resizeMode={"cover"}
                source={require("../assets/BobTheBuilder.jpg")}
              />
            </View>
            <View style={{ flex: 1, padding: 16 }}>
              <View style={{ marginBottom: 24 }}>
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
                  style={{
                    backgroundColor: "white",
                    borderRadius: 25,
                    borderWidth: 1,
                    width: 100,
                    paddingVertical: 4,
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Text>Book Now!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            flexBasis: 3,
            padding: 20,
            marginTop: 20,
            justifyContent: "space-between",
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ListWorker", { category: "Build House" })
            }
            style={{
              backgroundColor: "#FFC536",
              height: 100,
              width: 100,
              borderRadius: 25,
              marginBottom: 20,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <MaterialIcons name="house" size={60} color="black" />
            <Text>Build Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ListWorker", { category: "Electricity" })
            }
            style={{
              backgroundColor: "#FFC536",
              height: 100,
              width: 100,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <MaterialCommunityIcons
              name="home-lightning-bolt"
              size={60}
              color="black"
            />
            <Text>Electricity</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ListWorker", { category: "Toilet" })
            }
            style={{
              backgroundColor: "#FFC536",
              height: 100,
              width: 100,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <MaterialCommunityIcons name="toilet" size={60} color="black" />
            <Text>Toilet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ListWorker", { category: "Repair" })
            }
            style={{
              backgroundColor: "#FFC536",
              height: 100,
              width: 100,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <MaterialCommunityIcons
              name="hammer-screwdriver"
              size={60}
              color="black"
            />
            <Text>Repair</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ListWorker", { category: "Painting" })
            }
            style={{
              backgroundColor: "#FFC536",
              height: 100,
              width: 100,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <MaterialIcons name="format-paint" size={60} color="black" />
            <Text>Painting</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ListWorker", { category: "Plumbing" })
            }
            style={{
              backgroundColor: "#FFC536",
              height: 100,
              width: 100,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <MaterialIcons name="plumbing" size={60} color="black" />
            <Text>Plumbing</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
