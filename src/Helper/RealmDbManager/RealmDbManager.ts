import Realm from "realm";
import { EventsSchema } from "./DbSchemas/DbSchemas";

const databaseOptions = {
  path: "realmT4.realm",
  schema: [EventsSchema],
  schemaVersion: 0,
};

class RealmDbManager {
  public insertAll = (newTodoList: any, schema: any) =>
    new Promise((resolve, reject) => {
      Realm.open(databaseOptions)
        .then((realmObj: any) => {
          realmObj.write(() => {
            newTodoList.forEach((obj: any) => {
              if (
                realmObj.objects(schema).filtered(`id=${obj.id}`).length === 0
              ) {
                realmObj.create(schema, obj);
              }
            });
            console.log("newTodoList", newTodoList.length);
            resolve(newTodoList.length);
            realmObj.close();
          });
        })
        .catch((error) => {
          console.log("newTodoList", error);
          reject(error);
        });
    });

  public findById = (id: any, schema: any) =>
    new Promise((resolve, reject) => {
      Realm.open(databaseOptions)
        .then((realmObj: any) => {
          const res = realmObj.objects(schema).filtered(`id=${id}`);
          console.log("res", res[0].id + res[0].title);
          resolve(res);
        })
        .catch((error) => reject(error));
    });

  public update = (text: any, updateText: any, schema: any) =>
    new Promise((resolve, reject) => {
      Realm.open(databaseOptions)
        .then((realmObj: any) => {
          let target = realmObj.objects(schema).filtered(`id=${text}`)[0];
          if (!target) {
            target = realmObj.objects(schema).filtered(`title=${text}`)[0];
          }
          realmObj.write(() => {
            target.title = updateText;
          });
          realmObj.close();
          resolve(updateText);
        })
        .catch((error) => reject(error));
    });

  public deleteAll = (schema: any) =>
    new Promise((resolve, reject) => {
      Realm.open(databaseOptions)
        .then((realmObj: any) => {
          realmObj.write(() => {
            const allEvents = realmObj.objects(schema);
            realmObj.delete(allEvents);
            realmObj.close();
            resolve(true);
          });
        })
        .catch((error) => reject(error));
    });

  public closeAll = (schema: any) =>
    new Promise((resolve, reject) => {
      Realm.open(databaseOptions)
        .then((realmObj: any) => {
          realmObj.write(() => {
            const allEvents = realmObj.objects(schema);
            realmObj.delete(allEvents);
            realmObj.close();
            resolve(true);
          });
        })
        .catch((error) => reject(error));
    });
}

const realmDbManager = new RealmDbManager();
export default realmDbManager;
