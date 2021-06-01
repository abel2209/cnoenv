import analytics from "@react-native-firebase/analytics";
import React, { PureComponent } from "react";
import { Button, Text, View } from "react-native";
import { envConfiguration } from "../Helper/EnvConfigurations";
import offlineStorage from "../Helper/Realm/OfflineStorage";

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
            offlineStorage.createLead("Lead", {
              lead_name: "chintan",
              lead_address: "mumbai",
              opportunity: {
                opp_name: "cg",
              },
            });
          }}
          title="huuu"
        />
        <Button
          onPress={() => {
            offlineStorage.deleteEntity('Lead');
          }}
          title="tttttt"
        />
      </View>
    );
  }
}

export default HomePage;
