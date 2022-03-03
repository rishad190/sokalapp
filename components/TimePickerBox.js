import { View, Text, Picker } from "react-native";
import React from "react";
import { timeData } from "./timeData";

export default function TimePickerBox({ boxName }) {
  const [selectedValue, setSelectedValue] = React.useState("");
  return (
    <Picker
      selectedValue={selectedValue}
      style={{ height: 50, width: 150 }}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    >
      {timeData.map((time, i) => (
        <React.Fragment key={i}>
          <Picker.Item label={time} value={time} />
        </React.Fragment>
      ))}
    </Picker>
  );
}
