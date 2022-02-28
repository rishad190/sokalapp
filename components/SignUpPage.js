import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Input, Icon } from "react-native-elements";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function SignUpPage({ navigation }) {
  const [signUpData, setSignUpData] = React.useState({});
  const handleSignUp = (dataName, data) => {
    setSignUpData({ ...signUpData, [dataName]: data });
  };

  return (
    <View>
      <Text>SignUpPage</Text>
      <Text>Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={(test) => handleSignUp("name", test)}
      ></TextInput>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={(test) => handleSignUp("email", test)}
      ></TextInput>
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        onChangeText={(test) => handleSignUp("password", test)}
      ></TextInput>
      <Text>Mobile</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Number"
        onChangeText={(test) => handleSignUp("number", test)}
      ></TextInput>
      <Button title="Submit" onPress={() => navigation.navigate("Login")} />
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
