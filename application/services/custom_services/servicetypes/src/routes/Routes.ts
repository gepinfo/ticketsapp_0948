import { Request, Response, NextFunction } from "express";
import { servicestypeController } from '../controller/servicestypeController';


export class Routes {
    private servicestype: servicestypeController = new servicestypeController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/servicestype/:id').delete(this.servicestype.GpDelete);
app.route('/servicestype/get/search').get(this.servicestype.GpSearch);
app.route('/servicestype/get/update').put(this.servicestype.GpSearchForUpdate);
app.route('/servicestype').put(this.servicestype.GpUpdate);
app.route('/servicestype/:id').get(this.servicestype.GpGetEntityById);
app.route('/servicestype').get(this.servicestype.GpGetAllValues);
app.route('/servicestype').post(this.servicestype.GpCreate);
app.route('/servicestype/userid/created_by').get(this.servicestype.GpGetNounCreatedBy);
     }

}