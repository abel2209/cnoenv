import { RealmSchema } from "../../Constants";

export const LeadSchema = {
  name: RealmSchema.LeadSchema,
  properties: {
    lead_name: "string",
    lead_address: "string",
    // contacts: 'CONTACTS?',
    opportunity: "Oppurtunity",
    // appointment: 'APPOINTMENT[]?',
    // task: 'TASK[]?'
  },
};

export const OpportunitySchema = {
  name: RealmSchema.OpportunitySchema,
  embedded: true,
  properties: {
    opp_name: "string",
    // contacts: 'CONTACTS?',
    // appointment: 'APPOINTMENT?'
  },
};

export const AppointmentSchema = {
  name: RealmSchema.AppointmentSchema,
  embedded: true,
  properties: {
    lead_id: "string",
    date: "date",
    start_time: "date",
    end_time: "date",
  },
};

export const ContactsSchema = {
  name: RealmSchema.ContactsSchema,
  embedded: true,
  properties: {
    contact_details: "string",
  },
};

export const HouseholdSchema = {
  name: RealmSchema.HouseholdSchema,
  embedded: true,
  properties: {
    contacts: "Contacts?",
  },
};
