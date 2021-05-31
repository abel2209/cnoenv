import React, { PureComponent } from "react";
import { Button, Text, View } from "react-native";
import HTTP_METHODS from "../Constants";
import apiManager from "../Helper/ApiManager";
import { envConfiguration } from "../Helper/EnvConfigurations";
import analytics from "@react-native-firebase/analytics";

class HomePage extends PureComponent {
  async CaptureScreenName() {
    await analytics().logScreenView({
      screen_name: "HomeScreen",
      screen_class: "HomeScreen",
    });
  }
  componentDidMount() {
    this.CaptureScreenName();
  }

  render() {
    return (
      <View>
        <Text>eeeeeee </Text>
        <Text>{envConfiguration.api.host} </Text>
        <Button
          onPress={() => {
            apiManager.apiCall("albums", HTTP_METHODS.GET);
          }}
          title="huuu"
        />
      </View>
    );
  }
}

export default HomePage;
