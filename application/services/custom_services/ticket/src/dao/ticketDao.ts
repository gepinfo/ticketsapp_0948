import * as mongoose from 'mongoose';
import ticketModel from '../models/daomodels/ticket';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class ticketDao {
    private ticket = ticketModel;
    constructor() { }
    
    public async GpDelete(ticketId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpDelete');

    

    
    
    
    this.ticket.findByIdAndRemove(ticketId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(ticketData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                            }
                        );;
    this.ticket.find({ $and: [and_obj] }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpSearchForUpdate');

    

    
    
    
    this.ticket.findOneAndUpdate({ _id: ticketData._id }, ticketData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpUpdate');

    

    
    
    
    ticketData.last_modified_date = new Date(),
                                                   this.ticket.findOneAndUpdate({ _id: ticketData._id }, ticketData).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpUpdate');

         let newresult = result.toObject();  
                                                     delete newresult._id;
                                                     result.last_modified_date = "";
                                                    let temp = new ticketModel(newresult);
                                                    temp.save();

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(ticketId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpGetEntityById');

    

    
    
    
    this.ticket.find({"gephistoryid":ticketId}).sort({last_modified_date: -1}).limit(1).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpGetAllValues');

    

    
    
    
    this.ticket.aggregate(([
                        { "$sort": { "last_modified_date": 1 } },{ "$group": { "_id": "$gephistoryid",  "item": { "$last": "$$ROOT" }  }}    
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpGetAllValues');

        let lastupdated:any = [];
                         result.forEach(item=> lastupdated.push(item.item))
                         result=lastupdated 

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpCreate');

    let gepCallGuid = `${generate(dictionary.numbers, 50)}`;
                    ticketData.gephistoryid = gepCallGuid;
                    let temp = new ticketModel(ticketData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.ticket.aggregate(([
                        { $match: { $and: [{ created_by: ticketData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}