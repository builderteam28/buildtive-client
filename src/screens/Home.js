import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <>
      <Text>Page Home</Text>
      <Button title="To Add" onPress={() => navigation.navigate("FormProject")} />
    </>
  );
}
