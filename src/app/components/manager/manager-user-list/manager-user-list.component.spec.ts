import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerUserListComponent } from './manager-user-list.component';

describe('ManagerUserListComponent', () => {
  let component: ManagerUserListComponent;
  let fixture: ComponentFixture<ManagerUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
