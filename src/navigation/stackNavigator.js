import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import TabNavigator from "./tabNavigator";
import OnBoardingScreen from "../screens/onBoardingScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
