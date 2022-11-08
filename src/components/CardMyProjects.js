import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, SimpleLineIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CardMyProjects() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content1}>
        <Text style={{ width: 200, fontSize: 18, fontWeight: "500" }}>
          Nama Project ini adalah Sesuatu
        </Text>
        <View style={styles.active}>
          <Text style={styles.buttonText}>Active</Text>
        </View>
        {/* <View style={styles.inactive}>
          <Text style={styles.buttonText}>Inactive</Text>
        </View> */}
      </View>
      <View style={{ marginBottom: 10 }}>
        <View style={styles.description}>
          <SimpleLineIcons
            name="clock"
            size={24}
            color="black"
            style={{ marginRight: 20 }}
          />
          <Text style={{ fontSize: 18 }}>Duration</Text>
        </View>
        <View style={styles.description}>
          <FontAwesome5
            name="money-bill"
            size={24}
            color="black"
            style={{ marginRight: 14 }}
          />
          <Text style={{ fontSize: 18 }}>50.000.000</Text>
        </View>
        <View style={styles.description}>
          <FontAwesome
            name="group"
            size={24}
            color="black"
            style={{ marginRight: 18 }}
          />
          <Text style={{ fontSize: 18 }}> 6/6</Text>
        </View>
      </View>
      <View style={styles.content2}>
        <Text style={{ fontSize: 18 }}>Category Name</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("DetailProject")}
          style={styles.detailButton}>
          <Text style={styles.buttonText}>Details</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Rating")}
        style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.paidButton}>
          <Text style={styles.buttonText}>Already Paid</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.content2}>
        {/* <View style={styles.notPaid}>
          <Text style={styles.buttonText}>Not Yet Paid</Text>
        </View>
        <View style={styles.payButton}>
          <Text style={styles.buttonText}>Pay</Text>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFC536",
    borderRadius: 20,
  },
  content1: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  content2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  description: { flexDirection: "row", marginBottom: 10 },
  active: {
    width: 80,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#00c853",
    justifyContent: "center",
    alignItems: "center",
  },
  inactive: {
    width: 80,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#d50000",
    justifyContent: "center",
    alignItems: "center",
  },
  detailButton: {
    width: 80,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#102027",
    justifyContent: "center",
    alignItems: "center",
  },
  paidButton: {
    width: 120,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#00c853",
    justifyContent: "center",
    alignItems: "center",
  },
  notPaid: {
    width: 120,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#d50000",
    justifyContent: "center",
    alignItems: "center",
  },
  payButton: {
    width: 80,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#102027",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "500" },
});
