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
import Chat from "../screens/Chat";
import ModalPayment from "../components/ModalPayment";
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
      <Stack.Screen name="FormProject" component={FormProject} options={{title: "Create New Project"}} />
      <Stack.Screen name="DetailWorker" component={DetailWorker} options={{title: "Worker Detail"}} />
      <Stack.Screen name="DetailProject" component={DetailProject} options={{headerShown: false}} />
      <Stack.Screen name="Payment" component={Payment} options={{title: "Payment with Midtrans"}} />
      <Stack.Screen name="Rating" component={Rating} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
