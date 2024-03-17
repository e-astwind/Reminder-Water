import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import { Feather, Ionicons } from "@expo/vector-icons";
import { lightColors } from "../../../global/colors";
export default function HomeHeader({ routeName }: { routeName: string }) {
  const screenStyles = styles();

  return (
    <View style={screenStyles.container}>
      <Feather name="menu" size={24} color={lightColors.tertiary} />
      <Text style={screenStyles.routeName}>{routeName}</Text>
      <Ionicons
        name="notifications-outline"
        size={24}
        color={lightColors.tertiary}
      />
    </View>
  );
}
