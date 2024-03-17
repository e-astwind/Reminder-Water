import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import HydrationLevel from "../../components/HydrationLevel";

export default function Home() {
  const screenStyles = styles();
  return (
    <View style={screenStyles.container}>
      <HydrationLevel
        currentValue={100}
        meta={2100}
        radius={200}
        strokeWidth={100}
      />
    </View>
  );
}
