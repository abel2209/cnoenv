import axios from "axios";
import { envConfiguration } from "./EnvConfigurations";
import AppConstant from "../AppConstant";
import { IsNetworkAvailble } from "./IsNetworkAvailble";
import crashlytics from "@react-native-firebase/crashlytics";

class ApiManager {
  private createHeaders(headers?: any) {
    if (headers === null) {
      headers = {};
    }
    // headers.Accept = 'application/json'
    // headers['Content-Type'] = 'application/json'
    return headers;
  }

  private createRequest(
    path: string,
    HTTP_METHODS: any,
    headers?: any,
    params?: any
  ) {
    return {
      url: path,
      method: HTTP_METHODS,
      baseURL: envConfiguration.api.host,
      timeout: envConfiguration.api.timeout,
      timeoutErrorMessage: envConfiguration.api.timeoutErrorMessage,
      headers: this.createHeaders(headers),
      params: params,
    };
  }

  public isNetworkConnected() {
    return IsNetworkAvailble;
  }

  async apiCall(path: string, HTTP_METHODS: any) {
    if (!this.isNetworkConnected) {
      return;
    }
    let request = this.createRequest(path, HTTP_METHODS);
    try {
      let response = await axios(request);
      return response;
    } catch (error) {
      crashlytics().recordError(error);
    }
  }

  public async syncEntities(recordCount: number) {
    if (!this.isNetworkConnected) {
      return;
    }
    var request = [];
    let concurrentRequestCount = Math.ceil(recordCount / 500);
    for (
      let requestCount = 0;
      requestCount < concurrentRequestCount;
      requestCount++
    ) {
      request.push(this.apiCall(" ", AppConstant.HTTP_METHODS.GET));
    }
    try {
      const response = await Promise.all(request);
      const data = response.map((respData) => respData?.data);
      // console.log(data.flat());
    } catch (error) {
      crashlytics().recordError(error);
    }
  }
}
const apiManager = new ApiManager();
export default apiManager;
