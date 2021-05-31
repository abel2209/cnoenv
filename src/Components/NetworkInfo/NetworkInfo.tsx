import React from "react";
import { Alert, View } from "react-native";
import { IsNetworkAvailble } from "../../Helper/IsNetworkAvailble";

export const NetworkInfo = () => {

  return (
    <View>
      {!IsNetworkAvailble &&
        Alert.alert("Please check your internet connection!")}
    </View>
  );
};
