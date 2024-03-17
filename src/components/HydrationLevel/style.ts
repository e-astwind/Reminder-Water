import { StyleSheet } from "react-native";
import { lightColors } from "../../global/colors";

export const styles = () => {
  return StyleSheet.create({
    levelHydrationContainer: {
      position: "absolute",
      alignSelf: "center",
      top: "50%",
    },
    metaLabel: {
      alignSelf: "center",
      color: lightColors.tertiary,
      fontSize: 22,
    },
    currentValueLabel: {
      color: lightColors.primary,
      fontSize: 22,
    },
    metaValueLabel: {
      color: lightColors.tertiary,
      fontSize: 22,
    },
  });
};
