import { StyleSheet } from "react-native";
import { lightColors } from "../../global/colors";

export const styles = () => {
  const colors = lightColors;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.secondary,
      gap: 20,
    },
    routeName: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.tertiary,
    },
  });
};
