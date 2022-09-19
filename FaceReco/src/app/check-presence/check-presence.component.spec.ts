import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPresenceComponent } from './check-presence.component';

describe('CheckPresenceComponent', () => {
  let component: CheckPresenceComponent;
  let fixture: ComponentFixture<CheckPresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckPresenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
