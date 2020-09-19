import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorDashboardComponent } from './administrador-dashboard.component';

describe('AdministradorDashboardComponent', () => {
  let component: AdministradorDashboardComponent;
  let fixture: ComponentFixture<AdministradorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
