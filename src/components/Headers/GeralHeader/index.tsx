import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import { Feather } from "@expo/vector-icons";
import { lightColors } from "../../../global/colors";
export default function GeralHeader({ routeName }: { routeName: string }) {
  const screenStyles = styles();

  return (
    <View style={screenStyles.container}>
      <Feather name="arrow-left" size={24} color={lightColors.tertiary} />
      <Text style={screenStyles.routeName}>{routeName}</Text>
    </View>
  );
}
