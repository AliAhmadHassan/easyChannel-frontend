import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSituationNewComponent } from './manager-situation-new.component';

describe('ManagerSituationNewComponent', () => {
  let component: ManagerSituationNewComponent;
  let fixture: ComponentFixture<ManagerSituationNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerSituationNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerSituationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
