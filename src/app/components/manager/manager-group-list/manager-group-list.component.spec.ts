import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerGroupListComponent } from './manager-group-list.component';

describe('ManagerGroupListComponent', () => {
  let component: ManagerGroupListComponent;
  let fixture: ComponentFixture<ManagerGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
