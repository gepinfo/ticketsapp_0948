import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallhistoryComponent } from './getallhistory.component';

describe('GetallhistoryComponent', () => {
  let component: GetallhistoryComponent;
  let fixture: ComponentFixture<GetallhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});