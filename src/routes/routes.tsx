import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/Home";
import Reminder from "../pages/Reminder";
import More from "../pages/More";
import HomeHeader from "../components/Headers/HomeHeader";
import GeralHeader from "../components/Headers/GeralHeader";

export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            header() {
              return <HomeHeader routeName="Nível de Hidratação" />;
            },
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            header() {
              return <GeralHeader routeName="Relembrar" />;
            },
          }}
          name="Reminder"
          component={Reminder}
        />
        <Stack.Screen
          options={{
            header() {
              return <GeralHeader routeName="Mais" />;
            },
          }}
          name="More"
          component={More}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
