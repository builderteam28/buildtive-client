import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons, Octicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function ListWorker({ route }) {
  const { category } = route.params;
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{ padding: 10, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", left: 15 }}>
          <Ionicons name="arrow-back-sharp" size={26} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 24 }}>{category}</Text>
      </View>
      <View
        style={{
          padding: 30,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("DetailWorker")}
          style={{
            height: 140,
            width: 140,
            padding: 6,
            borderRadius: 14,
            backgroundColor: "#FFC536",
            alignItems: "center",
          }}>
          <Octicons name="feed-person" size={54} color="black" style={{marginBottom: 8}} />
          <Text>Bambang Prakoso</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="location-pin" size={14} color="black" />
            <Text style={{ fontSize: 12 }}>Indonesia</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="star" size={12} color="black" />
            <Text style={{ fontSize: 12 }}>4.9</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 140,
            width: 140,
            padding: 6,
            borderRadius: 14,
            backgroundColor: "#FFC536",
            alignItems: "center",
          }}>
          <Octicons name="feed-person" size={54} color="black" style={{marginBottom: 8}} />
          <Text>Bambang Prakoso</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="location-pin" size={14} color="black" />
            <Text style={{ fontSize: 12 }}>Indonesia</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="star" size={12} color="black" />
            <Text style={{ fontSize: 12 }}>4.9</Text>
          </View>
        </View>
      </View>
    </>
  );
}
