import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudClientEdithComponent } from './crud-client-edit.component';

describe('CrudClientEdithComponent', () => {
  let component: CrudClientEdithComponent;
  let fixture: ComponentFixture<CrudClientEdithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudClientEdithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudClientEdithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
