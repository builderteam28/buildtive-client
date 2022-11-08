import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
export default function ListCategories() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ListWorker", {
              CategoryId: 1,
              name: "Build Home",
            })
          }
          style={styles.card}>
          <MaterialIcons name="house" size={60} color="black" />
          <Text>Build Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ListWorker", {
              CategoryId: 2,
              name: "Electricity",
            })
          }
          style={styles.card}>
          <MaterialCommunityIcons
            name="home-lightning-bolt"
            size={60}
            color="black"
          />
          <Text>Electricity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ListWorker", { CategoryId: 3, name: "Toilet" })
          }
          style={styles.card}>
          <MaterialCommunityIcons name="toilet" size={60} color="black" />
          <Text>Toilet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ListWorker", { CategoryId: 4, name: "Repair" })
          }
          style={styles.card}>
          <MaterialCommunityIcons
            name="hammer-screwdriver"
            size={60}
            color="black"
          />
          <Text>Repair</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ListWorker", {
              CategoryId: 5,
              name: "Painting",
            })
          }
          style={styles.card}>
          <MaterialIcons name="format-paint" size={60} color="black" />
          <Text>Painting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ListWorker", {
              CategoryId: 6,
              name: "Plumbing",
            })
          }
          style={styles.card}>
          <MaterialIcons name="plumbing" size={60} color="black" />
          <Text>Plumbing</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    flexBasis: 3,
    padding: 20,
    marginTop: 20,
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#FFC536",
    height: 100,
    width: 100,
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
