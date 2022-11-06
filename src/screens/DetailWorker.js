import { StyleSheet, Text, View } from "react-native";
import { Octicons, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
export default function MyProjects() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Octicons name="feed-person" size={80} color="#FFC536" style={{marginBottom: 10}} />
        <Text style={{fontSize: 20, fontWeight:"500"}}>Ujang Kempot</Text>
        <Text style={{fontSize: 18}}>Work Category: Plumber</Text>
        <Text style={{fontSize: 16}}>
          <FontAwesome name="phone" size={14} color="black" /> 0987654321
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#e0e0e0",
          width: "80%",
          paddingHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 10,
        }}>
        <View >
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="star"
              size={14}
              color="gold"
              style={{ alignSelf: "center", marginRight: 1 }}
            />
            <Text style={{ fontSize: 14 }}>4.9</Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 14 }}>Rating</Text>
          </View>
        </View>
        <View style={{justifyContent:"center", alignItems:"center"}}>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons name="rate-review" size={14} color="black" style={{ alignSelf: "flex-end", marginRight: 1 }} />
            <Text style={{ fontSize: 14 }}>100</Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 14 }}>Reviews</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  containerInfo: {
    alignItems: "center",
    marginBottom: 20
  },
});
