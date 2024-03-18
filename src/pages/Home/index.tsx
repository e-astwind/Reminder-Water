import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import HydrationLevel from "../../components/HydrationLevel";
import SelectionBar from "../../components/SelectionBar";

export default function Home() {
  const screenStyles = styles();
  return (
    <View style={screenStyles.container}>
      <HydrationLevel
        currentValue={900}
        meta={1000}
        radius={200}
        strokeWidth={100}
      />
      <SelectionBar />
    </View>
  );
}
