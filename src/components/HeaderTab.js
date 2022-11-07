import { Text, View } from "react-native";
import { Octicons, MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function HeaderTab() {
  const { userData } = useSelector((state) => state.user);
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
          <Text style={{ fontSize: 12 }}>Indonesia</Text>
        </View>
      </View>
    </View>
  );
}
