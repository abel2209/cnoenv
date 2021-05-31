import AsyncStorage from "@react-native-async-storage/async-storage";
import { authorize, refresh, AuthConfiguration } from "react-native-app-auth";
import moment from "moment";
import { AuthConfig } from "./EnvConfigurations";
import { SecureStorage } from "./SecureStorage";

const USER_TOKEN = "userToken";
const REFRESH_TOKEN = "refreshToken";
const EXPIRE_TIME = "expireTime";

let appScopes = [
  "openid",
  "offline_access",
  "profile",
  "User.Read",
  "MailboxSettings.Read",
  "Calendars.ReadWrite",
];

const config: AuthConfiguration = {
  clientId: AuthConfig.appId,
  redirectUrl: "graph-tutorial://react-native-auth/",
  scopes: appScopes,
  additionalParameters: { prompt: "select_account" },
  serviceConfiguration: {
    authorizationEndpoint: AuthConfig.authorizationEndpoint,
    tokenEndpoint: AuthConfig.tokenEndpoint,
  },
};

export class AuthManager {
  static signInAsync = async () => {
    const result = await authorize(config);

    await SecureStorage.saveData(USER_TOKEN, result.accessToken);
    await SecureStorage.saveData(REFRESH_TOKEN, result.refreshToken);
    await SecureStorage.saveData(EXPIRE_TIME, result.accessTokenExpirationDate);
  };

  static signOutAsync = async () => {
    SecureStorage.RemoveData(USER_TOKEN);
    SecureStorage.RemoveData(REFRESH_TOKEN);
    SecureStorage.RemoveData(EXPIRE_TIME);
  };

  static getAccessTokenAsync = async () => {
    const expireTime = await SecureStorage.getData(EXPIRE_TIME);

    if (expireTime !== null) {
      // Get expiration time - 5 minutes
      // If it's <= 5 minutes before expiration, then refresh
      const expire = moment(expireTime).subtract(5, "minutes");
      const now = moment();

      if (now.isSameOrAfter(expire)) {
        // Expired, refresh
        console.log("Refreshing token");
        const refreshToken = await AsyncStorage.getItem("refreshToken");
        console.log(`Refresh token: ${refreshToken}`);
        const result = await refresh(config, {
          refreshToken: refreshToken || "",
        });

        // Store the new access token, refresh token, and expiration time in storage

        await SecureStorage.saveData(USER_TOKEN, result.accessToken);
        await SecureStorage.saveData(REFRESH_TOKEN, result.refreshToken || "");
        await SecureStorage.saveData(
          EXPIRE_TIME,
          result.accessTokenExpirationDate
        );

        return result.accessToken;
      }

      // Not expired, just return saved access token
      const accessToken = await SecureStorage.getData(USER_TOKEN);
      return accessToken;
    }

    return null;
  };
}
