import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import UserPage from "./components/UserPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Sign Up" component={SignUpPage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="User" component={UserPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
