import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import UserPage from "./components/UserPage";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignUpPage />
      <LoginPage /> */}
      <UserPage />

      <StatusBar style="auto" />
    </View>
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
