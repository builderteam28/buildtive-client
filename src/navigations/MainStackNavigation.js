import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import FormProject from "../screens/FormProject";
import DetailWorker from "../screens/DetailWorker";
import Payment from "../screens/Payment";
import HomeTabNavigation from "./HomeTabNavigation";
import Rating from "../screens/Rating";
import ListWorker from "../screens/ListWorker";
import DetailProject from "../screens/DetailProject";
const Stack = createStackNavigator();
export default function MainStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
      <Stack.Screen name="HomeTabNavigation" component={HomeTabNavigation} options={{headerShown: false}} />
      <Stack.Screen name="ListWorker" component={ListWorker} options={{headerShown: false}} />
      <Stack.Screen name="FormProject" component={FormProject} />
      <Stack.Screen name="DetailWorker" component={DetailWorker} />
      <Stack.Screen name="DetailProject" component={DetailProject} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Rating" component={Rating} />
    </Stack.Navigator>
  );
}
