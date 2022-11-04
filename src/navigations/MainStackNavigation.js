import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import FormProject from "../screens/FormProject";
import MyProjects from "../screens/MyProjects";
import Payment from "../screens/Payment";
import HomeTabNavigation from "./HomeTabNavigation";
import Rating from "../screens/Rating";
import ListWorker from "../screens/ListWorker";
const Stack = createStackNavigator();
export default function MainStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="HomeTabNavigation" component={HomeTabNavigation} options={{headerShown: false}} />
      <Stack.Screen name="ListWorker" component={ListWorker} />
      <Stack.Screen name="FormProject" component={FormProject} />
      <Stack.Screen name="MyProjects" component={MyProjects} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Rating" component={Rating} />
    </Stack.Navigator>
  );
}
