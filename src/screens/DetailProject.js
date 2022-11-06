import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Details from "../components/Details";
import MapDetail from "../components/MapDetail";
import ProjectWorkers from "../components/ProjectWorkers";

export default function DetailProject() {
  const [show, setShow] = useState("Details");
  const changeShow = (input) => {
    setShow(input);
  };
  return (
    <View style={styles.container}>
      <MapDetail />
      <View style={styles.containerDetail}>
        <View style={styles.switchContainer}>
          <TouchableOpacity onPress={() => changeShow("Details")}>
            <Text style={[styles.button, { backgroundColor: "#e0e0e0" }]}>
              Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeShow("Lists")}>
            <Text style={[styles.button, { backgroundColor: "#FFC536" }]}>
              Project Applicants
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          {show === "Details" ? <Details /> : <ProjectWorkers />}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMap: { flex: 2 },
  containerDetail: {
    paddingHorizontal: 10,
    marginTop: 20,
    backgroundColor: "white",
    height: "60%",
    padding: "5%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  button: {
    width: 140,
    padding: 6,
    textAlign: "center",
    borderRadius: 20,
    fontWeight: "500",
  },
});
