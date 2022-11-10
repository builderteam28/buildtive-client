import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Details from "../components/Details";
import MapDetail from "../components/MapDetail";
import ProjectWorkers from "../components/ProjectWorkers";
import { getProject } from "../store/actions/projectActions";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors, fonts } from "../helpers/theme";

export default function DetailProject({ route }) {
  const [isLoading, setIsLoading] = useState(true);
  const { project } = useSelector((state) => state.project);
  const [show, setShow] = useState("Details");
  const changeShow = (input) => {
    setShow(input);
  };
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProject(route.params.ProjectId)).then((data) => {
      if (data) {
        setIsLoading(false);
      }
    });
  }, []);
  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  if (!isLoading) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="arrow-back-sharp" size={26} color={colors.white} />
        </TouchableOpacity>
        <MapDetail project={project} />
        <View style={styles.containerDetail}>
          <View style={styles.switchContainer}>
            <TouchableOpacity onPress={() => changeShow("Details")}>
              <Text
                style={show === "Details" ? styles.active : styles.inactive}>
                Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeShow("Lists")}>
              <Text style={show === "Lists" ? styles.active : styles.inactive}>
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
  containerMap: { flex: 1 },
  containerDetail: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 20,
    backgroundColor: colors.white,
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
  active: {
    width: 140,
    padding: 6,
    textAlign: "center",
    borderRadius: 20,
    fontWeight: "500",
    backgroundColor: colors.primary,
    fontFamily: fonts.semiBold,
  },
  inactive: {
    width: 140,
    padding: 6,
    textAlign: "center",
    borderRadius: 20,
    fontWeight: "500",
    backgroundColor: colors.gray,
    fontFamily: fonts.semiBold,
    color: colors.white,
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 15,
    zIndex: 100,
    backgroundColor: colors.black,
    borderRadius: 25,
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    position: "absolute",
    alignSelf: "center",
    top: "46.5%",
  },
});
