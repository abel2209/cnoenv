import Realm from "realm";
import {
  AppointmentSchema,
  ContactsSchema,
  HouseholdSchema,
  LeadSchema,
  OpportunitySchema,
} from "./Schema";
import crashlytics from "@react-native-firebase/crashlytics";

class OfflineStorage {
  base64ToArrayBuffer() {
    //TODO: Store the key in keychain
    var binary_string =
      "N60LgDmG4CuwC9Gb//+EDlTSGpYwA1V83XDepAT+Dv/wFZL1cqvuIAZjbzw==wer";
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }
  //https://www.convertstring.com/EncodeDecode/HexEncode pass encryption key to URL to get hexcode
  // use it to open Relam
  realm = new Realm({
    encryptionKey: this.base64ToArrayBuffer(),
    schema: [
      LeadSchema,
      OpportunitySchema,
      AppointmentSchema,
      ContactsSchema,
      HouseholdSchema,
    ],
    schemaVersion: 0.1,
  });

  async getAllEntities(schema: string) {
    return this.realm.objects(schema);
  }

  async createEntity(schema: string, data: any) {
    try {
      this.realm.write(async () => {
        await this.realm.create(schema, data);
      });
    } catch (err) {
      crashlytics().log(JSON.stringify(err));
    }
  }

  async deleteEntity(schema: string) {
    try {
      this.realm.write(() => {
        this.realm.delete(this.realm.objects(schema));
      });
    } catch (err) {
      crashlytics().log(JSON.stringify(err));
    }
  }
}

const offlineStorage = new OfflineStorage();
export default offlineStorage;
