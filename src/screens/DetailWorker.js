import { StyleSheet, Text, View } from "react-native";
import {
  Octicons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getWorker } from "../store/actions/workerActions";
export default function DetailWorker({ route }) {
  const { worker } = useSelector((state) => state.worker);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorker(route.params.WorkerId));
  }, []);
  if (worker.WorkerCategories && worker.Ratings) {
    return (
      <View style={styles.container}>
        <View style={styles.containerInfo}>
          <Octicons
            name="feed-person"
            size={80}
            color="#FFC536"
            style={{ marginBottom: 10 }}
          />
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            {worker.fullName}
          </Text>
          <Text style={{ fontSize: 18 }}>
            Work Category: {worker.WorkerCategories[0].Category.name}
          </Text>
          <Text style={{ fontSize: 16 }}>
            <FontAwesome name="phone" size={14} color="black" />
            {worker.phoneNumber}
          </Text>
        </View>
        <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 20,
              borderRadius: 10,
              backgroundColor: "gray",
              marginBottom: 30,
            }}
          >
            <View>
              <View style={{ alignItems: 'center' }}>
                <Text style={[styles.text]}>Rating Overview</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={[styles.text]}>
                  <Text style={([styles.text], { fontSize: 48 })}>{worker.Ratings[0] ? worker.Ratings[0].ratings : 0}</Text>/5
                </Text>
              </View>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.text}>{worker.Ratings[0] ? worker.Ratings[0].reviews : 0} Ratings</Text>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  containerInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  containerRating: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#e0e0e0",
    width: "80%",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    color: "white"
  },
});
