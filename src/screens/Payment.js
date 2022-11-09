import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch } from "react-redux";
import { createPayment } from "../store/actions/projectActions";

export default function Payment({ route }) {
  const { transaction, cost, ProjectId } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleWebViewNavigationStateChange = (newNavState) => {
    const { url } = newNavState;
    if (!url) return;
    if (url.includes("transaction_status=settlement")) {
      dispatch(createPayment({ cost, ProjectId })).then((data) => {
        if (data) {
          navigation.navigate("Projects");
        }
      });
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
