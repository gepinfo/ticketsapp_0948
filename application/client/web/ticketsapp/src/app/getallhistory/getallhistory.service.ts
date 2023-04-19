import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class GetallhistoryService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpSearch(ticket:any): Observable<any> {
        const temp:any = [];
 	 	const objectKeyPair = Object.entries(ticket);
 	 	objectKeyPair.forEach((element, index) => {
 	 	if (element[1]) {
 	 	temp.push(`${element[0]}=${element[1]}`);
 	 	}
 	 	});
 	 	 return this.http.get(this.sharedService.WEB_API + `/ticket/get/search?gephistoryid=${ticket}`)
    }
}