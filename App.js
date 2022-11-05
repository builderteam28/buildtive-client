import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import MainStackNavigation from "./src/navigations/MainStackNavigation";
import store from "./src/store";
import {
  useFonts,
  Raleway_100Thin,
  Raleway_400Regular,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_100Thin,
    Raleway_400Regular,
    Raleway_600SemiBold,
    Raleway_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <MainStackNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const theme = {
  colors: {
    primary: "#FFC536",
    green: "#00BA1E",
    red: "#CA1D1D",
    blue: "#1B50B7",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
