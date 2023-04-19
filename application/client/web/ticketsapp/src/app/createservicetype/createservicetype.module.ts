import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateservicetypeComponent } from './createservicetype.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        CKEditorModule,
        RouterModule.forChild([
            { path: '', component: CreateservicetypeComponent },
        ])
    ],
    declarations: [
        CreateservicetypeComponent,
    ]
})
export class CreateservicetypeModule { }