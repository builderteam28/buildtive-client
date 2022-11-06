import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function ProjectWorkerCard({ detail }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <View style={styles.containerOne}>
        <View>
          <View style={styles.dataContainer}>
            <Ionicons
              name="person-sharp"
              size={20}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>{detail.worker.name}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Ionicons
              name="md-location-sharp"
              size={20}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>{detail.worker.address}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("DetailWorker")}
            style={[styles.button, { backgroundColor: "#FFC536" }]}>
            <Text style={styles.textButton}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      {detail.status !== "Accepted" ? (
        <View style={styles.containerTwo}>
          <TouchableOpacity
            style={[
              styles.button,
              { marginHorizontal: 10, backgroundColor: "#00c853" },
            ]}>
            <Text style={styles.textButton}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              { marginHorizontal: 10, backgroundColor: "#d50000" },
            ]}>
            <Text style={styles.textButton}>Decline</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text>Worker already accepted</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 16,
    borderRadius: 25,
    borderWidth: 1,
  },
  containerOne: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  containerTwo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dataContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  text: { fontSize: 15 },
  icon: { alignSelf: "center", width: 30 },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 25,
  },
  textButton: {
    color: "white",
    fontWeight: "500",
  },
});
