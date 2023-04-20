import { Component, OnInit } from '@angular/core';
import { CreateticketService } from './createticket.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export enum ticketstatus {
        OPEN = 'open',
        CLOSE = 'close',
        INPROGRESS = 'inprogress',
    }

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.scss'],
})

export class CreateticketComponent implements OnInit {
    Editor: any = ClassicEditor;
    severityitemArray: any = [];
    servicestypeitemArray: any = [];
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
        private createticketService: CreateticketService,
    ) { }

    ngOnInit() {
        this.ticket.created_by = sessionStorage.getItem('email') || ''; 
        this.severityGpGetAllValues();
        this.servicestypeGpGetAllValues();
    }
    GpCreate() {
        this.createticketService.GpCreate(this.ticket).subscribe((data:any) => {
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
    servicestypeGpGetAllValues() {
        this.createticketService.servicestypeGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.servicestypeitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.createticketService.severityGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.severityitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.createticketService.severityGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.severityitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    servicestypeGpGetAllValues() {
        this.createticketService.servicestypeGpGetAllValues().subscribe((data:any) => {
            console.log(data);
 	 	this.servicestypeitemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}