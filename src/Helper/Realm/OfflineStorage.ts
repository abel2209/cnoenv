import Realm from "realm";
import { RealmSchema } from "../../Constants";
import {
  AppointmentSchema,
  ContactsSchema,
  HouseholdSchema,
  LeadSchema,
  OpportunitySchema,
} from "./Schema";
import crashlytics from "@react-native-firebase/crashlytics";

class OfflineStorage {
  realm = new Realm({
    path: "Oscr",
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
