
export interface ticket 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   name: { type: String },
   description: { type: String },
   assigness: { type: String },
   severity: { type: String, ref: 'severity' },
   types: { type: String, ref: 'servicestype' },
   gephistoryid: { type: String },
   ticketstatus: { type: Ticketstatus }
}


export enum Ticketstatus {
   OPEN = 'open',
   CLOSE = 'close',
   INPROGRESS = 'inprogress'
}



