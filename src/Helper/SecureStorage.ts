import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";

export class SecureStorage {
  static saveData = async (storageKey: string, value: string) => {
    await RNSecureKeyStore.set(storageKey, value, {
      accessible: ACCESSIBLE.ALWAYS,
    });
  };

  static getData = async (storageKey: string) => {
    return await RNSecureKeyStore.get(storageKey);
  };

  static RemoveData = async (storageKey: string) => {
    return await RNSecureKeyStore.remove(storageKey);
  };
}
