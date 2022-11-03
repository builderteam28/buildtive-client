import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ marginHorizontal: 30, flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ marginLeft: 30, marginBottom: 50 }}>
              <Text style={{ fontSize: 20 }}>Log in to</Text>
              <Text style={{ fontSize: 20 }}>Your Account</Text>
            </View>
            <TextInput mode={'flat'} style={{ fontSize: 15, backgroundColor: 'transparent' }} placeholder="username" />
            <TextInput mode={'flat'} style={{ fontSize: 15, backgroundColor: 'transparent' }} placeholder="password" />
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
              Press me
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
