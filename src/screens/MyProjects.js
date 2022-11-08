import { Text, View } from "react-native";
import CardMyProjects from "../components/CardMyProjects";
import HeaderTab from "../components/HeaderTab";

export default function Profile() {

  return (
    <>
      <View style={{ flex: 1 }}>
        <HeaderTab />
        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style={{ fontSize: 24, marginBottom: 10 }}>My Projects</Text>
        </View>
        <View style={{ flex: 1, padding: 30 }}>
          <CardMyProjects />
        </View>
      </View>
    </>
  );
}
