import { Request, Response } from 'express';
import {ticketDao} from '../dao/ticketDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let ticket = new ticketDao();

export class ticketService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpDelete')
     let  ticketId = req.params.id;
     ticket.GpDelete(ticketId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpSearch')
     
     ticket.GpSearch(ticketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpSearchForUpdate')
     let  ticketData = req.body;
     ticket.GpSearchForUpdate(ticketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpUpdate')
     let  ticketData = req.body;
     ticket.GpUpdate(ticketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpGetEntityById')
     let  ticketId = req.params.id;
     ticket.GpGetEntityById(ticketId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpGetAllValues')
     
     ticket.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpCreate')
     let  ticketData = req.body;
     ticket.GpCreate(ticketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpGetNounCreatedBy')
     let  ticketData = { created_by: req.query.createdby };
     ticket.GpGetNounCreatedBy(ticketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}