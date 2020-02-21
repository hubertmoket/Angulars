import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudClientMemoireComponent } from './crud-client-memoire.component';

describe('CrudClientMemoireComponent', () => {
  let component: CrudClientMemoireComponent;
  let fixture: ComponentFixture<CrudClientMemoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudClientMemoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudClientMemoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
