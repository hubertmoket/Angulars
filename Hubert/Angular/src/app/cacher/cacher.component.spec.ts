import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacherComponent } from './cacher.component';

describe('CacherComponent', () => {
  let component: CacherComponent;
  let fixture: ComponentFixture<CacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
