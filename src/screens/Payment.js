import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function Payment({ route }) {
  const { transaction } = route.params;
  console.log(transaction)
  const navigation = useNavigation();
  const handleWebViewNavigationStateChange = (newNavState) => {
    const { url } = newNavState;
    if (!url) return;
    if (url.includes("transaction_status=settlement")) {
      navigation.navigate("Projects");
    }
  };
  return (
    <WebView
      style={styles.container}
      source={{ uri: `${transaction.redirect_url}` }}
      onNavigationStateChange={handleWebViewNavigationStateChange}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
