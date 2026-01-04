import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSituationListComponent } from './manager-situation-list.component';

describe('ManagerSituationListComponent', () => {
  let component: ManagerSituationListComponent;
  let fixture: ComponentFixture<ManagerSituationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerSituationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerSituationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
