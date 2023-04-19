import { Component, OnInit } from '@angular/core';
import { UpdateticketService } from './updateticket.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export enum ticketstatus {
        OPEN = 'open',
        CLOSE = 'close',
        INPROGRESS = 'inprogress',
    }

@Component({
  selector: 'app-updateticket',
  templateUrl: './updateticket.component.html',
  styleUrls: ['./updateticket.component.scss'],
})

export class UpdateticketComponent implements OnInit {
    queryId: any;
    Editor: any = ClassicEditor;
    public ticket:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
        assigness: '',
        severity: '',
        types: '',
        gephistoryid: '',
        ticketstatus: '',
    }

    constructor (
        private updateticketService: UpdateticketService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.ticket.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
        this.GpGetEntityById();
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params['id'];
            });
    }
    GpCreate() {
        this.updateticketService.GpCreate(this.ticket).subscribe((data:any) => {
            this.ticket.name = ''
 	 	this.ticket.description = ''
 	 	this.ticket.assigness = ''
 	 	this.ticket.severity = ''
 	 	this.ticket.types = ''
 	 	this.ticket.gephistoryid = ''
 	 	this.ticket.ticketstatus = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.updateticketService.GpGetAllValues().subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.updateticketService.GpUpdate(this.ticket).subscribe((data:any) => {
            this.ticket.name = ''
 	 	this.ticket.description = ''
 	 	this.ticket.assigness = ''
 	 	this.ticket.severity = ''
 	 	this.ticket.types = ''
 	 	this.ticket.gephistoryid = ''
 	 	this.ticket.ticketstatus = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpDelete() {
        this.updateticketService.GpDelete(this.queryId).subscribe((data:any) => {
            this.GpGetEntityById();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpGetEntityById() {
        this.updateticketService.GpGetEntityById(this.queryId).subscribe((data:any) => {
            this.ticket = data
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId:any) {
        this.router.navigate(['./getallhistory'], { queryParams: { 'id': queryId } })
    }
}