import React, { useState } from "react";
import { View, Button, Platform, Text, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { timeData } from "./timeData";
import TimePickerBox from "./TimePickerBox";

export const CalenderNew = () => {
  const [date, setDate] = useState(new Date());
  const [firstCurrentWeek, setFirstCurrentWeek] = useState();
  const [isDataTrue, setIsDataTrue] = useState(true);
  const [newWeek, setNewWeek] = useState();
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");

    setDate(currentDate);
    handleNewWeek(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
    handleCurrentWeek();
  };
  const handleCurrentWeek = () => {
    let curr = new Date();
    let week = [];
    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i;
      let day = new Date(curr.setDate(first)).toDateString().slice(0, 10);
      week.push(day);
    }
    setFirstCurrentWeek(week);
  };
  const handleNewWeek = (dateData) => {
    const isTrue = firstCurrentWeek?.some(
      (week) => week === dateData.toDateString().slice(0, 10)
    );

    if (isTrue === false) {
      let curr = dateData;
      let week = [];
      for (let i = 1; i <= 7; i++) {
        let first = curr.getDate() - curr.getDay() + i;
        let day = new Date(curr.setDate(first)).toDateString().slice(0, 10);
        week.push(day);
      }
      setNewWeek(week);
      setIsDataTrue(isTrue);
    } else {
      console.log("error");
    }
  };

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
      {isDataTrue ? (
        <View>
          {firstCurrentWeek?.map((day, i) => (
            <View key={i}>
              <Text>{day}</Text>
              <View style={styles.viewBox}>
                <TimePickerBox />
                <Text style={styles.textMargin}>TO</Text>
                <TimePickerBox />
              </View>
            </View>
          ))}
        </View>
      ) : (
        <View>
          {newWeek?.map((day, i) => (
            <Text key={i}>{day}</Text>
          ))}
        </View>
      )}
      {/* {week?.map((day, i) => (
        <Text key={i}>{day}</Text>
      ))} */}
    </View>
  );
};
const styles = StyleSheet.create({
  viewBox: {
    flex: 1,
    flexDirection: "row",
  },
  textMargin: {
    margin: 10,
  },
});
