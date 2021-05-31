import { useNetInfo } from "@react-native-community/netinfo";

export const IsNetworkAvailble = () => {
    return useNetInfo().isConnected;
};
