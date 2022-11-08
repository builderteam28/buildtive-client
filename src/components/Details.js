import { StyleSheet, Text, View } from "react-native";
import {
  FontAwesome,
  SimpleLineIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

export default function Details({ project }) {
  if (project) {
    return (
      <>
        <View style={{ flex: 1, padding: 8 }}>
          <Text style={styles.title}>{project.name}</Text>
          <Text style={styles.heading}>Category: {project.Category.name}</Text>
          <View style={styles.listContainer}>
            <View style={styles.list}>
              <SimpleLineIcons
                name="clock"
                size={16}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.listText}>{project.tenor} day</Text>
            </View>
            <View style={styles.list}>
              <FontAwesome5
                name="money-bill"
                size={16}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.listText}>{project.cost}</Text>
            </View>
            <View style={styles.list}>
              <FontAwesome
                name="group"
                size={16}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.listText}>
                {project.acceptedWorker.length}/{project.totalWorker}
              </Text>
            </View>
            <View style={styles.list}>
              <Ionicons
                name="md-location-sharp"
                size={20}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.listText}>{project.address}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.heading}>Description</Text>
            <Text style={styles.description}>{project.description}</Text>
          </View>
        </View>
      </>
    );
  }
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
