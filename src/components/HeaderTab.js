import { Text, View } from "react-native";
import { Octicons, MaterialIcons } from "@expo/vector-icons";

export default function HeaderTab() {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical:10,
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
        <Text style={{ fontSize: 16, fontWeight: "500" }}>John Wick</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="location-pin" size={14} color="black" />
          <Text style={{ fontSize: 12 }}>Indonesia</Text>
        </View>
      </View>
    </View>
  );
}
