import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomePage from "../Screens/HomeScreen";

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        gestureEnabled: false,
        header: undefined,
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
}

export default Routes;
