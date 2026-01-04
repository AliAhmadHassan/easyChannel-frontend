import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendantMenuComponent } from './attendant-menu.component';

describe('AttendantMenuComponent', () => {
  let component: AttendantMenuComponent;
  let fixture: ComponentFixture<AttendantMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendantMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendantMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
