const EVENTS_SCHEMA = 'events';


export const EventsSchema = {
  name: EVENTS_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    userId: 'int',
    title: 'string',
    completed: 'bool'
  }
};