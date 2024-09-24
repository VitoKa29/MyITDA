import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import SplashScreen from "../../pages/splash";
import AuthScreen from "../../pages/auth";
import HomeScreen from "../../pages/home";
import Payment from "../../pages/Payment";
import Riwayat from "../../pages/Riwayat";
import Tutorial from "../../pages/Tutorial";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <BottomSheetModalProvider>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
        screenListeners={{
          state: (e) => console.log("EVENT SCREEN", JSON.stringify(e, null, 2)),
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Riwayat" component={Riwayat} />
        <Stack.Screen name="Tutorial" component={Tutorial} />
      </Stack.Navigator>
    </BottomSheetModalProvider>
  );
}
