import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallservicetypeComponent } from './getallservicetype.component';

describe('GetallservicetypeComponent', () => {
  let component: GetallservicetypeComponent;
  let fixture: ComponentFixture<GetallservicetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallservicetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallservicetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});