import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, Octicons, MaterialIcons } from "@expo/vector-icons";

export default function CardListWorker({ worker }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DetailWorker", { WorkerId: worker.id })
      }
      style={styles.card}>
      <Octicons
        name="feed-person"
        size={54}
        color="black"
        style={{ marginBottom: 8 }}
      />
      <Text>{worker.Worker.fullName}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons name="location-pin" size={14} color="black" />
        <Text style={{ fontSize: 12 }}>{worker.Worker.address}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="star" size={12} color="black" />
        <Text style={{ fontSize: 12 }}>4.9</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 140,
    width: 140,
    padding: 6,
    borderRadius: 14,
    backgroundColor: "#FFC536",
    alignItems: "center",
    margin: "4%",
  },
});
