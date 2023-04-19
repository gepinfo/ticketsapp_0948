import * as mongoose from 'mongoose';
import servicestypeModel from '../models/daomodels/servicestype';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class servicestypeDao {
    private servicestype = servicestypeModel;
    constructor() { }
    
    public async GpDelete(servicestypeId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into servicestypeDao.ts: GpDelete');

    

    
    
    
    this.servicestype.findByIdAndRemove(servicestypeId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from servicestypeDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(servicestypeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into servicestypeDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(servicestypeData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.servicestype.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from servicestypeDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(servicestypeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into servicestypeDao.ts: GpSearchForUpdate');

    

    
    
    
    this.servicestype.findOneAndUpdate({ _id: servicestypeData._id }, servicestypeData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from servicestypeDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(servicestypeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into servicestypeDao.ts: GpUpdate');

    

    
    
    
    this.servicestype.findOneAndUpdate({ _id: servicestypeData._id }, servicestypeData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from servicestypeDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(servicestypeId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into servicestypeDao.ts: GpGetEntityById');

    

    
    
    
    this.servicestype.findById(servicestypeId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from servicestypeDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into servicestypeDao.ts: GpGetAllValues');

    

    
    
    
    this.servicestype.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from servicestypeDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(servicestypeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into servicestypeDao.ts: GpCreate');

    let temp = new servicestypeModel(servicestypeData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from servicestypeDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(servicestypeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into servicestypeDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.servicestype.aggregate(([
                        { $match: { $and: [{ created_by: servicestypeData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from servicestypeDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}