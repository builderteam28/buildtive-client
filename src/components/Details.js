import { StyleSheet, Text, View } from "react-native";
import {
  FontAwesome,
  SimpleLineIcons,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { colors, fonts } from "../helpers/theme";

export default function Details({ project }) {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  if (project) {
    return (
      <>
        <View style={{ flex: 1, padding: 8 }}>
          <Text style={styles.title}>{project.name}</Text>
          <Text style={styles.heading}>Category: {project.Category.name}</Text>
          <View style={styles.listContainer}>
            <View style={styles.list}>
              <MaterialCommunityIcons
                name="clock"
                size={20}
                color={colors.black}
                style={styles.icon}
              />
              <Text style={styles.listText}>{project.tenor} day</Text>
            </View>
            <View style={styles.list}>
              <FontAwesome5
                name="money-bill"
                size={16}
                color={colors.black}
                style={styles.icon}
              />
              <Text style={styles.listText}>
                Rp. {formatPrice(project.cost)},-
              </Text>
            </View>
            <View style={styles.list}>
              <FontAwesome
                name="group"
                size={16}
                color={colors.black}
                style={styles.icon}
              />
              {project.status === "Complete" ? (
                <Text style={styles.listText}>
                  {project.totalWorker}/{project.totalWorker} person
                </Text>
              ) : (
                <Text style={styles.listText}>
                  {project.acceptedWorker.length}/{project.totalWorker} person
                </Text>
              )}
            </View>
            <View style={styles.list}>
              <Ionicons
                name="md-location-sharp"
                size={20}
                color={colors.black}
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
    fontFamily: fonts.bold,
  },
  heading: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
  },
  listContainer: {
    marginTop: 10,
  },
  list: { flexDirection: "row", marginBottom: 10 },
  listText: { fontSize: 15, fontFamily: fonts.regular },
  icon: { alignSelf: "flex-end", width: 30 },
  description: {
    textAlign: "justify",
    fontFamily: fonts.regular,
  },
});
