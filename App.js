import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Raleway_100Thin, Raleway_400Regular, Raleway_600SemiBold, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { Login } from './src/screens/Login';
import { Register } from './src/screens/Register';

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
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
}

const theme = {
  colors: {
    primary: '#FFC536',
    green: '#00BA1E',
    red: '#CA1D1D',
    blue: '#1B50B7',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
