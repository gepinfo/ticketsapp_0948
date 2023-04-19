import { Request, Response } from 'express';
import {servicestypeDao} from '../dao/servicestypeDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let servicestype = new servicestypeDao();

export class servicestypeService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicestypeService.ts: GpDelete')
     let  servicestypeId = req.params.id;
     servicestype.GpDelete(servicestypeId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicestypeService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicestypeService.ts: GpSearch')
     let  servicestypeData = req.query;
     servicestype.GpSearch(servicestypeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicestypeService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicestypeService.ts: GpSearchForUpdate')
     let  servicestypeData = req.body;
     servicestype.GpSearchForUpdate(servicestypeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicestypeService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicestypeService.ts: GpUpdate')
     let  servicestypeData = req.body;
     servicestype.GpUpdate(servicestypeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicestypeService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicestypeService.ts: GpGetEntityById')
     let  servicestypeId = req.params.id;
     servicestype.GpGetEntityById(servicestypeId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicestypeService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicestypeService.ts: GpGetAllValues')
     
     servicestype.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicestypeService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicestypeService.ts: GpCreate')
     let  servicestypeData = req.body;
     servicestype.GpCreate(servicestypeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicestypeService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicestypeService.ts: GpGetNounCreatedBy')
     let  servicestypeData = { created_by: req.query.createdby };
     servicestype.GpGetNounCreatedBy(servicestypeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicestypeService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}