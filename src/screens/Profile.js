import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";

export default function Profile() {
  const navigation = useNavigation();

  return (
    <>
      <Text>Page Profile</Text>
      <Button title="To My Projects" onPress={() => navigation.navigate("MyProjects")} />
    </>
  )
}