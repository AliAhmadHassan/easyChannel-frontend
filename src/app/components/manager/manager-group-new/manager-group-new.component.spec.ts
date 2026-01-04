import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerGroupNewComponent } from './manager-group-new.component';

describe('ManagerGroupNewComponent', () => {
  let component: ManagerGroupNewComponent;
  let fixture: ComponentFixture<ManagerGroupNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerGroupNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerGroupNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
