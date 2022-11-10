import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors, fonts } from "../helpers/theme";
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
          <MaterialIcons name="house" size={60} color={colors.black} />
          <Text style={{ fontFamily: fonts.medium }}>Build Home</Text>
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
            color={colors.black}
          />
          <Text style={{ fontFamily: fonts.medium }}>Electricity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ListWorker", {
              CategoryId: 3,
              name: "Carpentry",
            })
          }
          style={styles.card}>
          <MaterialIcons name="carpenter" size={60} color={colors.black} />
          <Text style={{ fontFamily: fonts.medium }}>Carpentry</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ListWorker", { CategoryId: 4, name: "Repair" })
          }
          style={styles.card}>
          <MaterialCommunityIcons
            name="hammer-screwdriver"
            size={60}
            color={colors.black}
          />
          <Text style={{ fontFamily: fonts.medium }}>Repair</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ListWorker", {
              CategoryId: 5,
              name: "Painting",
            })
          }
          style={styles.card}>
          <MaterialIcons name="format-paint" size={60} color={colors.black} />
          <Text style={{ fontFamily: fonts.medium }}>Painting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ListWorker", {
              CategoryId: 6,
              name: "Plumbing",
            })
          }
          style={styles.card}>
          <MaterialIcons name="plumbing" size={60} color={colors.black} />
          <Text style={{ fontFamily: fonts.medium }}>Plumbing</Text>
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
    backgroundColor: colors.primary,
    height: 100,
    width: 100,
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
