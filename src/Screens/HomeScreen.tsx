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
        <Text>{envConfiguration.api.host} </Text>
        <Button
          onPress={() => {
            offlineStorage.createEntity("Lead", {
              lead_name: "chintan",
              lead_address: "mumbai",
              opportunity: {
                opp_name: "cg",
              },
            });
          }}
          title="ADD RECORD"
        />
        <Button
          onPress={() => {
            offlineStorage.deleteEntity("Lead");
          }}
          title="DELETE RECORD"
        />
      </View>
    );
  }
}

export default HomePage;
