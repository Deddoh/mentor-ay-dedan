import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgingApplicationsComponent } from './aging-applications.component';

describe('AgingApplicationsComponent', () => {
  let component: AgingApplicationsComponent;
  let fixture: ComponentFixture<AgingApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgingApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgingApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
