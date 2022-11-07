import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Octicons, MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default function HeaderTab() {
  const { userData } = useSelector((state) => state.user);
  const [region, setRegion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLoading(false);
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      let regionName = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setRegion(regionName)
      setLoading(false);
    })();
  }, []);
  
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={"yellow"} />
      </View>
    );
  }

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
      }}>
      <Octicons
        name="feed-person"
        size={30}
        color="black"
        style={{ marginRight: 8 }}
      />
      <View>
        {userData && (
          <Text style={{ fontSize: 16, fontWeight: "500" }}>{userData.name}</Text>
        )}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="location-pin" size={14} color="black" />
          <Text style={{ fontSize: 12 }}>{JSON.stringify(region[0]["city"]).replace(/"/g, "")}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    position: "absolute",
    alignSelf: "center",
    top: "46.5%",
  },
})