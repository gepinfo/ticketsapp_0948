import { Component, OnInit } from '@angular/core';
import { CreateservicetypeService } from './createservicetype.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-createservicetype',
  templateUrl: './createservicetype.component.html',
  styleUrls: ['./createservicetype.component.scss'],
})

export class CreateservicetypeComponent implements OnInit {
    Editor: any = ClassicEditor;
    public servicestype:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }

    constructor (
        private createservicetypeService: CreateservicetypeService,
    ) { }

    ngOnInit() {
        this.servicestype.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createservicetypeService.GpCreate(this.servicestype).subscribe((data:any) => {
            this.servicestype.name = ''
 	 	this.servicestype.description = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}