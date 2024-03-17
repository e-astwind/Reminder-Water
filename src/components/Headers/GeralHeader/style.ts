import { StyleSheet } from "react-native";
import { lightColors } from "../../../global/colors";

export const styles = () => {
  const colors = lightColors;

  return StyleSheet.create({
    container: {
      width: "100%",

      height: 86,
      paddingHorizontal: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: colors.secondary,
    },
    routeName: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.tertiary,
    },
  });
};
