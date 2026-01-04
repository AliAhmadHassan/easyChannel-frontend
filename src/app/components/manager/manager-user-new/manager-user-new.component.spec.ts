import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerUserNewComponent } from './manager-user-new.component';

describe('ManagerUserNewComponent', () => {
  let component: ManagerUserNewComponent;
  let fixture: ComponentFixture<ManagerUserNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerUserNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerUserNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
