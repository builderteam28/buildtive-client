import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { createRatings } from "../store/actions/projectActions";
import { useNavigation } from "@react-navigation/native";
export default function Rating({ route }) {
  const [starRating, setStarRating] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleSubmitRating = () => {
    dispatch(createRatings({ value: starRating, ProjectId: route.params.ProjectId }))
      .then((data) => { if (data) {navigation.navigate("Projects")}});
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerHeading}>
          <Text style={styles.heading}>Let's rate your project</Text>
          <Text style={styles.heading2}>
            How did you like the results from project {route.params.name}?
          </Text>
          <Text style={styles.heading3}>
            (1 is disappointing, 5 is awesome)
          </Text>
        </View>
        <View style={styles.stars}>
          <TouchableOpacity onPress={() => setStarRating(1)}>
            <MaterialIcons
              name={starRating >= 1 ? "star" : "star-border"}
              size={32}
              style={
                starRating >= 1 ? styles.starSelected : styles.starUnselected
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStarRating(2)}>
            <MaterialIcons
              name={starRating >= 2 ? "star" : "star-border"}
              size={32}
              style={
                starRating >= 2 ? styles.starSelected : styles.starUnselected
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStarRating(3)}>
            <MaterialIcons
              name={starRating >= 3 ? "star" : "star-border"}
              size={32}
              style={
                starRating >= 3 ? styles.starSelected : styles.starUnselected
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStarRating(4)}>
            <MaterialIcons
              name={starRating >= 4 ? "star" : "star-border"}
              size={32}
              style={
                starRating >= 4 ? styles.starSelected : styles.starUnselected
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStarRating(5)}>
            <MaterialIcons
              name={starRating >= 5 ? "star" : "star-border"}
              size={32}
              style={
                starRating >= 5 ? styles.starSelected : styles.starUnselected
              }
            />
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <Text>Review will appear publicly </Text>
          <Ionicons
            name="ios-information-circle-outline"
            size={14}
            color="black"
            style={{ alignSelf: "flex-end" }}
          />
        </View>
        {starRating && (
          <TouchableOpacity
            onPress={() => handleSubmitRating()}
            style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  containerHeading: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  heading2: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  heading3: {
    fontSize: 14,
    textAlign: "center",
  },
  info: {
    flexDirection: "row",
    marginBottom: 30,
  },
  submitButton: {
    width: 300,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#00c853",
    justifyContent: "center",
    alignItems: "center",
  },
  submitText: { color: "white", fontWeight: "500" },
  stars: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  starUnselected: {
    color: "#aaa",
  },
  starSelected: {
    color: "#ffb300",
  },
});
