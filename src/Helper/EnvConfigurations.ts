import env from "react-native-config";

export const envConfiguration = {
  api: {
    host: env.BASE_URL,
    timeout: 400000,
    timeoutErrorMessage: "Something Went Wrong!",
  },
};

export const AuthConfig = {
  appId: env.appId,
  authorizationEndpoint: env.authorizationEndpoint,
  tokenEndpoint: env.tokenEndpoint,
};
