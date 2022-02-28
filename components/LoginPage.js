import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React from "react";

export default function LoginPage({ navigation }) {
  const [loginData, setLoginData] = React.useState({});
  const handleLogin = (dataName, data) => {
    setLoginData({ ...loginData, [dataName]: data });
  };
  return (
    <View>
      <Text>Login Page</Text>
      <Text>Email</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        onChangeText={(test) => handleLogin("email", test)}
      ></TextInput>
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        onChangeText={(test) => handleLogin("password", test)}
      ></TextInput>
      <Button title="Login" onPress={() => navigation.navigate("User")} />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
