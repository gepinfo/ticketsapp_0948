import { Component, OnInit } from '@angular/core';
import { GetallservicetypeService } from './getallservicetype.service';


@Component({
  selector: 'app-getallservicetype',
  templateUrl: './getallservicetype.component.html',
  styleUrls: ['./getallservicetype.component.scss'],
})

export class GetallservicetypeComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },];
    public servicestype:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any[] = [];
 	rowIndex: Number = 0;

    constructor (
        private getallservicetypeService: GetallservicetypeService,
    ) { }

    ngOnInit() {
        this.servicestype.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpGetAllValues() {
        this.getallservicetypeService.GpGetAllValues().subscribe((data:any) => {
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