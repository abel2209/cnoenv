import React from "react";
import { Alert, View } from "react-native";
import { IsNetworkAvailble } from "../../Helper/IsNetworkAvailble";
import { ErrorMessages } from "../../Constants";

export const NetworkInfo = () => {
  return (
    <View>
      {!IsNetworkAvailble && Alert.alert(ErrorMessages.NO_CONNECTIVITY)}
    </View>
  );
};
