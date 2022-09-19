import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReportPresenceComponent } from './view-report-presence.component';

describe('ViewReportPresenceComponent', () => {
  let component: ViewReportPresenceComponent;
  let fixture: ComponentFixture<ViewReportPresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReportPresenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReportPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
