import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CardListWorker from "../components/CardListWorker";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { workersById } from "../store/actions/workerActions";
import { colors, fonts } from "../helpers/theme";
export default function ListWorker({ route }) {
  const [isLoading, setIsLoading] = useState(true);
  const category = route.params.name;
  const { workers } = useSelector((state) => state.worker);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(workersById(route.params.CategoryId)).then((data) => {
      if (data) {
        setIsLoading(false);
      }
    });
  }, []);
  const renderItem = ({ item }) => <CardListWorker worker={item} />;
  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  if (!isLoading) {
    return (
      <>
        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ position: "absolute", left: 15 }}>
            <Ionicons name="arrow-back-sharp" size={26} color={colors.black} />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontFamily: fonts.semiBold }}>
            {category}
          </Text>
        </View>
        <View
          style={{
            padding: 20,
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
}

const styles = StyleSheet.create({
  loader: {
    position: "absolute",
    alignSelf: "center",
    top: "46.5%",
  },
});