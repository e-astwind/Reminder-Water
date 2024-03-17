import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/Home";
import Reminder from "../pages/Reminder";
import More from "../pages/More";

export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Reminder" component={Reminder} />
        <Stack.Screen name="More" component={More} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
