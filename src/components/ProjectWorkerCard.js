import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {
  acceptWorker,
  declineWorker,
  getMyProjects,
} from "../store/actions/projectActions";
import React, { useEffect } from "react";
export default function ProjectWorkerCard({ projectWorker }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleAccept = () => {
    dispatch(
      acceptWorker({
        WorkerId: projectWorker.WorkerId,
        ProjectId: projectWorker.ProjectId,
      })
    );
  };
  const handleDecline = () => {
    dispatch(
      declineWorker({
        WorkerId: projectWorker.WorkerId,
        ProjectId: projectWorker.ProjectId,
      })
    );
  };
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
            <Text style={styles.text}>{projectWorker.Worker.fullName}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Ionicons
              name="md-location-sharp"
              size={20}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>{projectWorker.Worker.address}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetailWorker", {
                WorkerId: projectWorker.Worker.id,
              })
            }
            style={[styles.button, { backgroundColor: "#FFC536" }]}>
            <Text style={styles.textButton}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      {projectWorker.status === "Applicant" && (
        <View style={styles.containerTwo}>
          <TouchableOpacity
            onPress={() => handleAccept()}
            style={[
              styles.button,
              { marginHorizontal: 10, backgroundColor: "#00c853" },
            ]}>
            <Text style={styles.textButton}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDecline()}
            style={[
              styles.button,
              { marginHorizontal: 10, backgroundColor: "#d50000" },
            ]}>
            <Text style={styles.textButton}>Decline</Text>
          </TouchableOpacity>
        </View>
      )}
      {projectWorker.status === "Accepted" && (
        <View style={styles.status}>
          <Text style={{ color: "#00c853" }}>Worker already accepted</Text>
        </View>
      )}
      {projectWorker.status === "Rejected" && (
        <View style={styles.status}>
          <Text style={{ color: "#d50000" }}>Worker already rejected</Text>
        </View>
      )}
      {projectWorker.status === "Occupied" && (
        <View style={styles.status}>
          <Text>Worker already accepted in another project</Text>
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
  status: { justifyContent: "center", alignItems: "center" },
});
