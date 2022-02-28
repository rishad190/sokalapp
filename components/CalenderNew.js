import React, { useState } from "react";
import { View, Button, Platform, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const CalenderNew = () => {
  const [date, setDate] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  let week = [];
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");

    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };
  if (currentWeek) {
    let curr = currentWeek;

    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i;
      let day = new Date(curr.setDate(first)).toDateString().slice(0, 10);
      week.push(day);
    }
  }

  console.log(week);
  return (
    <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      {week?.map((day, i) => (
        <Text key={i}>{day}</Text>
      ))}
    </View>
  );
};
