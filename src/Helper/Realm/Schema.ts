export const Lead = {
  name: 'LEAD',
  properties: {
    lead_name: 'string',
    lead_address: 'string',
    // contacts: 'CONTACTS?',
    opportunity: 'OPPORTUNITTY',
    // appointment: 'APPOINTMENT[]?',
    // task: 'TASK[]?'
  }
};

export const Opportunity = {
  name: 'OPPORTUNITTY',
  embedded: true,
  properties: {
    opp_name: 'string',
    // contacts: 'CONTACTS?',
    // appointment: 'APPOINTMENT?'
  }
};

export const Appointment = {
  name: 'APPOINTMENT',
  embedded: true,
  properties: {
    lead_id: 'string',
    date: 'date',
    start_time: 'date',
    end_time: 'date'
  }
};

export const Task = {
  name: 'TASK',
  embedded: true,
  properties: {
    lead_id: 'string',
    task_name: 'string'
  }
}

export const Contacts = {
  name: 'CONTACTS',
  embedded: true,
  properties: {
    contact_details: 'string'
  }
}

export const Household = {
  name: 'HOUSEHOLD',
  embedded: true,
  properties: {
    contacts: 'CONTACTS?'
  }
}