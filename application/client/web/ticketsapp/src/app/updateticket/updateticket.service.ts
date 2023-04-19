import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class UpdateticketService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(ticket:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.post(this.sharedService.WEB_API + '/ticket' + `?jwt_token=${jwt_token}`, ticket);
    }
    GpUpdate(ticket:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.put(this.sharedService.WEB_API + '/ticket' + `?jwt_token=${jwt_token}`, ticket);
    }
    GpDelete(ticketId:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.delete(this.sharedService.WEB_API + '/ticket/' + ticketId + `?jwt_token=${jwt_token}`);
    }
    GpGetEntityById(ticketId:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/ticket/' + ticketId + `?jwt_token=${jwt_token}`);
    }
    (): Observable<any> {
        
    }
    (): Observable<any> {
        
    }
}