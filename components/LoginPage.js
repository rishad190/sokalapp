import { View, Text, TextInput, Button } from "react-native";
import React from "react";

export default function LoginPage() {
  const [loginData, setLoginData] = React.useState({});
  const handleLogin = (dataName, data) => {
    setLoginData({ ...loginData, [dataName]: data });
  };
  return (
    <View>
      <Text>Login Page</Text>
      <Text>Email</Text>
      <TextInput
        onChangeText={(test) => handleLogin("email", test)}
      ></TextInput>
      <Text>Password</Text>
      <TextInput
        onChangeText={(test) => handleLogin("password", test)}
      ></TextInput>
      <Button title="Login" />
    </View>
  );
}
