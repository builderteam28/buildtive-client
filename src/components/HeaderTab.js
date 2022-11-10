import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Octicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { colors, fonts } from "../helpers/theme";

export default function HeaderTab() {
  const { userData } = useSelector((state) => state.user);
  const navigation = useNavigation();
  if (!userData) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  const logoutHandler = async () => {
    await AsyncStorage.removeItem("access_token");
    navigation.replace("Login");
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Octicons
          name="feed-person"
          size={30}
          color={colors.black}
          style={{ marginRight: 8 }}
        />
        <View>
          {userData && (
            <Text style={{ fontSize: 16, fontFamily: fonts.medium }}>
              {userData.name}
            </Text>
          )}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="location-pin" size={14} color={colors.black} />
            <Text style={{ fontSize: 12, fontFamily: fonts.medium }}>
              {userData.location}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => logoutHandler()}>
        <MaterialCommunityIcons name="logout" size={28} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    position: "absolute",
    alignSelf: "center",
    top: "46.5%",
  },
});
