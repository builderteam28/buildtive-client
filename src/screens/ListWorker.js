import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CardListWorker from "../components/CardListWorker";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { workersById } from "../store/actions/workerActions";
export default function ListWorker({ route }) {
  const category = route.params.name;
  const { workers } = useSelector((state) => state.worker);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(workersById(route.params.CategoryId))
  }, [])
  const renderItem = ({ item }) => <CardListWorker worker={item} />;
  return (
    <>
      <View
        style={{ padding: 10, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", left: 15 }}>
          <Ionicons name="arrow-back-sharp" size={26} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 24 }}>{category}</Text>
      </View>
      <View
        style={{
          padding: 30,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
          <FlatList
          data={workers}
          renderItem={renderItem}
          keyExtractor={(worker) => worker.id}
          numColumns={2}
          />
      </View>
    </>
  );
}
