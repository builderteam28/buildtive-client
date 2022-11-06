import { StyleSheet, Text, View } from "react-native";
import {
  FontAwesome,
  SimpleLineIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

export default function Details() {
  return (
    <>
      <View style={{ flex: 1, padding: 8 }}>
        <Text style={styles.title}>Perbaikan hati yang patah hati</Text>
        <Text style={styles.heading}>Category: Repair</Text>
        <View style={styles.listContainer}>
          <View style={styles.list}>
            <SimpleLineIcons
              name="clock"
              size={16}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.listText}>Duration</Text>
          </View>
          <View style={styles.list}>
            <FontAwesome5
              name="money-bill"
              size={16}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.listText}>50.000.000</Text>
          </View>
          <View style={styles.list}>
            <FontAwesome
              name="group"
              size={16}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.listText}>6/6</Text>
          </View>
          <View style={styles.list}>
            <Ionicons
              name="md-location-sharp"
              size={20}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.listText}>Jalan Merdeka No.17</Text>
          </View>
        </View>
        <View>
          <Text style={styles.heading}>Description</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante
            metus dictum at tempor commodo ullamcorper a lacus. Sed viverra
            ipsum nunc aliquet bibendum enim facilisis gravida. Neque sodales ut
            etiam sit. Malesuada pellentesque elit eget gravida cum sociis.
            Imperdiet sed euismod nisi porta lorem mollis.{" "}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  heading: {
    fontSize: 16,
    fontWeight: "500",
  },
  listContainer: {
    marginTop: 10,
  },
  list: { flexDirection: "row", marginBottom: 10 },
  listText: { fontSize: 15 },
  icon: { alignSelf: "center", width: 30 },
  description: {
    textAlign: "justify",
  },
});
