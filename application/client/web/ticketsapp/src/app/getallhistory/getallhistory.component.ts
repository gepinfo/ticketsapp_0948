import { Component, OnInit } from '@angular/core';
import { GetallhistoryService } from './getallhistory.service';
import { ActivatedRoute } from '@angular/router';

    export enum ticketstatus {
        OPEN = 'open',
        CLOSE = 'close',
        INPROGRESS = 'inprogress',
    }

@Component({
  selector: 'app-getallhistory',
  templateUrl: './getallhistory.component.html',
  styleUrls: ['./getallhistory.component.scss'],
})

export class GetallhistoryComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },{ headerName: 'assigness', field: 'assigness'  },{ headerName: 'severity', field: 'severity'  },{ headerName: 'types', field: 'types'  },{ headerName: 'ticketstatus', field: 'ticketstatus'  },];
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
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any[] = [];
 	rowIndex: Number = 0;
    public queryId:any = ''
    public gephistoryid:any = '';

    constructor (
        private getallhistoryService: GetallhistoryService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.ticket.created_by = sessionStorage.getItem('email') || ''; 
        this.GpSearch();
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params['id'];
                    this.ticket.gephistoryid = params['gephistoryid'];
            });
    }
    GpSearch() {
        this.getallhistoryService.GpSearch(this.ticket.gephistoryid).subscribe((data:any) => {
            this.rowData = data;
 	 	console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}