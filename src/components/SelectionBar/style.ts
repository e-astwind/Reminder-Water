import { StyleSheet } from "react-native";

export const styles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 30,
    },
    scrollContainer: {
      width: "100%",
      height: 50,
    },
    buttonWater: {
      padding: 10,
      borderRadius: 10,
      gap: 8,
      flexDirection: "row",
    },
  });
};
