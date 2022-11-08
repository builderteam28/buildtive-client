import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Details from "../components/Details";
import MapDetail from "../components/MapDetail";
import ProjectWorkers from "../components/ProjectWorkers";
import { getProject } from "../store/actions/projectActions";

export default function DetailProject({ route }) {
  const [isLoading, setIsLoading] = useState(true);
  const { project } = useSelector((state) => state.project);
  const [show, setShow] = useState("Details");
  const changeShow = (input) => {
    setShow(input);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProject(route.params.ProjectId)).then((data) => {
      if (data) {
        setIsLoading(false);
      }
    });
  }, []);
  if (!isLoading) {
    return (
      <View style={styles.container}>
        <MapDetail project={project} />
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
            {show === "Details" ? (
              <Details project={project} />
            ) : (
              <ProjectWorkers workers={project.ProjectWorkers} />
            )}
          </View>
        </View>
      </View>
    );
  }
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
