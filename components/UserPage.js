import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CalendarStrip from "react-native-calendar-strip";
import { CalenderNew } from "./CalenderNew";

export default function UserPage() {
  const [dateData, setDateData] = React.useState(new Date());

  return (
    <View>
      <Text>Rishad</Text>
      <Text>Email : rishad@gmail.com</Text>
      <Text>Select Week</Text>
      <Text>{dateData.toDateString()}</Text>
      <View>
        <CalenderNew />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
