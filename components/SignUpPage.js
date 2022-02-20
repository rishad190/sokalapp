import { View, Text, TextInput, Button } from "react-native";
import React from "react";

export default function SignUpPage() {
  const [signUpData, setSignUpData] = React.useState({});
  const handleSignUp = (dataName, data) => {
    setSignUpData({ ...signUpData, [dataName]: data });
  };

  return (
    <View>
      <Text>SignUpPage</Text>
      <Text>Name</Text>
      <TextInput
        defaultValue="Enter your name"
        onChangeText={(test) => handleSignUp("name", test)}
      ></TextInput>
      <Text>Email</Text>
      <TextInput
        onChangeText={(test) => handleSignUp("email", test)}
      ></TextInput>
      <Text>Password</Text>
      <TextInput
        onChangeText={(test) => handleSignUp("password", test)}
      ></TextInput>
      <Text>Mobile</Text>
      <TextInput
        onChangeText={(test) => handleSignUp("number", test)}
      ></TextInput>
      <Button title="Submit" />
    </View>
  );
}
