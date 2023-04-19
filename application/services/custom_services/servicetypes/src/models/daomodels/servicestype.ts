
import * as mongoose from 'mongoose';
import {  } from '../entitymodels/ticket';

const Schema = mongoose.Schema;

export const servicestypeSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   description: { type: String }
})

const servicestypeModel = mongoose.model('servicestype', servicestypeSchema, 'servicestype');
export default servicestypeModel;
