import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import { useEffect, useState } from "react";
import { fonts } from "../helpers/theme";
export default function CardListWorker({ worker }) {
  const [uri, setUri] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const slug = worker.Worker.fullName.replace(" ", "-");
    setUri(`https://avatars.dicebear.com/api/micah/${slug}.svg`);
  }, [uri]);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DetailWorker", { WorkerId: worker.id })
      }
      style={styles.card}>
      <View style={styles.svg}>
        <SvgUri width="100%" height="100%" uri={uri} />
      </View>
      <Text style={{ fontFamily: fonts.regular }}>
        {worker.Worker.fullName}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons name="location-pin" size={14} color="black" />
        <Text style={{ fontSize: 12, fontFamily: fonts.regular }}>
          {worker.Worker.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: 150,
    padding: 10,
    borderRadius: 14,
    backgroundColor: "#FFC536",
    alignItems: "center",
    margin: "4%",
    justifyContent: "center",
    alignItems: "center",
  },
  svg: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 10,
  },
});
