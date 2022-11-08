import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Dropdown from "../components/Dropdown";
import { useDispatch } from "react-redux";
import { createProject } from "../store/actions/projectActions";

export default function FormProject() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState({
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    latitude: -6.2608201,
    longitude: 106.2608,
  });
  const [projectData, setProjectData] = useState({
    name: "",
    tenor: "",
    totalWorker: "",
    cost: "",
    address: "",
    description: "",
    category: {},
  });

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [categories] = useState([
    {
      id: 1,
      label: "Home Build",
      value: "Home Build",
    },
    {
      id: 2,
      label: "Electricity",
      value: "Electricity",
    },
    {
      id: 3,
      label: "Toilet",
      value: "Toilet",
    },
    {
      id: 4,
      label: "Repair",
      value: "Repair",
    },
    {
      id: 5,
      label: "Painting",
      value: "Painting",
    },
    {
      id: 6,
      label: "Plumbing",
      value: "Plumbing",
    },
  ]);

  const onRegionChange = (region) => {
    setRegion(region);
  };

  const handleChange = (name, value) => {
    setProjectData({ ...projectData, [name]: value });
  };

  const onChangeSelect = (selectedObject) => {
    setProjectData({
      ...projectData,
      category: selectedObject,
    });
  };

  const handleSubmit = () => {
    let input = {
      ...projectData,
      lat: region.latitude,
      long: region.longitude,
      CategoryId: projectData.category.id,
    };
    delete input.category;

    dispatch(createProject(input)).then((data) => {
      if (data) {
        navigation.navigate("HomeTabNavigation", { screen: "Projects" });
      }
    });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLoading(false);
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        ...region,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <View style={styles.markerFixed}>
        <ActivityIndicator size="large" color={"yellow"} />
      </View>
    );
  }

  if (step === 1 && !loading) {
    return (
      <View style={styles.map}>
        <MapView
          style={styles.map}
          initialRegion={region}
          onRegionChangeComplete={onRegionChange}
        />
        <View style={styles.markerFixed}>
          <FontAwesome5 name="map-marker-alt" size={24} color="#d50000" />
        </View>
        <TouchableOpacity
          onPress={() => setStep(2)}
          style={styles.buttonLocation}>
          <Text style={styles.textLocation}>Choose Location</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (step === 2 && !loading) {
    return (
      <>
        <View style={{ paddingTop: 20 }}>
          <View style={styles.registerTitle}>
            <Text style={styles.text}>Create New</Text>
            <Text style={styles.textBuildHub}>Project</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              selectionColor={"#FFC536"}
              style={styles.textInput}
              placeholder="Project Name"
              onChangeText={(text) => handleChange("name", text)}
            />
            <TextInput
              selectionColor={"#FFC536"}
              style={styles.textInput}
              placeholder="Description"
              onChangeText={(text) => handleChange("description", text)}
            />
            <TextInput
              selectionColor={"#FFC536"}
              style={styles.textInput}
              placeholder="Address"
              onChangeText={(text) => handleChange("address", text)}
            />
            <TextInput
              selectionColor={"#FFC536"}
              style={styles.textInput}
              placeholder="Day of works"
              keyboardType="number-pad"
              onChangeText={(text) => handleChange("tenor", text)}
            />
            <TextInput
              selectionColor={"#FFC536"}
              style={styles.textInput}
              placeholder="Total Worker"
              keyboardType="number-pad"
              onChangeText={(text) => handleChange("totalWorker", text)}
            />
            <TextInput
              selectionColor={"#FFC536"}
              style={styles.textInput}
              placeholder="Cost"
              keyboardType="number-pad"
              onChangeText={(text) => handleChange("cost", text)}
            />
            <View style={styles.inputContainer}>
              <Dropdown
                data={categories}
                title={"Project category"}
                onChange={onChangeSelect}
                value={projectData.category}
              />
            </View>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.createButton}>
              <Text>Create new Project</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setStep(1);
                setProjectData({
                  projectName: "",
                  workHours: "",
                  totalWorker: "",
                  cost: "",
                  address: "",
                  category: {},
                });
              }}
              style={styles.backButton}>
              <Text>Back to Choose Map</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const baseButton = {
  width: 250,
  paddingVertical: 10,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  borderWidth: 1,
};
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  markerFixed: {
    position: "absolute",
    alignSelf: "center",
    top: "46.5%",
  },
  buttonLocation: {
    backgroundColor: "#FFC536",
    alignSelf: "center",
    bottom: "20%",
    position: "absolute",
    padding: "4%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    elevation: 4,
    shadowOpacity: 0.9,
  },
  textLocation: {
    fontSize: 16,
    fontWeight: "600",
  },
  inputContainer: { justifyContent: "center", alignItems: "center" },
  textInput: {
    width: 300,
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    backgroundColor: "transparent",
    marginBottom: 24,
  },
  createButton: {
    ...baseButton,
    backgroundColor: "#FFC536",
    borderColor: "#FFC536",
    marginBottom: 15,
    marginTop: 24,
  },
  backButton: {
    ...baseButton,
    backgroundColor: "white",
  },
  text: { fontSize: 36, fontWeight: "500", textAlign: "center" },
  textBuildHub: {
    fontSize: 36,
    fontWeight: "500",
    textAlign: "center",
    color: "#FFC536",
  },
});
