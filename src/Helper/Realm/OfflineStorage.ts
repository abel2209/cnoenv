import Realm from "realm";
import { Appointment, Contacts, Household, Lead, Opportunity } from "./Schema";

class OfflineStorage {
    realm = new Realm({
        path: "realmT4.realm",
        schema: [Lead, Opportunity, Appointment, Contacts, Household],
        schemaVersion: 0.2
    });


    async getAllEntities() {
        return this.realm.objects('LEAD');
    }

    async createSchema(schema: any, data: any) {
        try {
            this.realm.write(() => {
                this.realm.create(schema, data);
            });
        }
        catch (err) {

        }
    }
    async createLead(schema: any, data: any) {
        try {
            this.realm.write(() => {
                let temp = this.realm.create(schema, data);
                let readObj = this.realm.objects(schema);
            });
        }
        catch (err) {

        }
    }

    async createOpportunity(data: any) {
        try {
            this.realm.write(() => {
                this.realm.create('OPPORTUNITTY', {
                    lead_id: data.lead_id,
                    opp_name: data.opp_name,
                });
            });
        }
        catch (err) {

        }
    }

    async createAppontment(data: any) {
        try {
            this.realm.write(() => {
                this.realm.create('APPOINTMENT', {
                    lead_id: data.lead_id,
                    date: data.date,
                    start_time: data.start_time,
                    end_time: data.end_time
                });
            });
        }
        catch (err) {

        }
    }

    async deleteEntity(schema: any) {
        try {
            this.realm.write(() => {
                this.realm.delete(this.realm.objects(schema));
            });
            let readObj = this.realm.objects(schema);
        }
        catch (err) {

        }
    }
}

const offlineStorage = new OfflineStorage();
export default offlineStorage;
