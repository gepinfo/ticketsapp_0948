import { Request, Response } from 'express';
import { servicestypeService } from '../service/servicestypeService';
import { CustomLogger } from '../config/Logger'
let servicestype = new servicestypeService();

export class servicestypeController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    servicestype.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicestypeController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicestypeController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    servicestype.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicestypeController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicestypeController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    servicestype.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicestypeController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicestypeController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    servicestype.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicestypeController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicestypeController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    servicestype.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicestypeController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicestypeController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    servicestype.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicestypeController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicestypeController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    servicestype.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicestypeController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicestypeController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    servicestype.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicestypeController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicestypeController.ts: GpGetNounCreatedBy');
    })}


}