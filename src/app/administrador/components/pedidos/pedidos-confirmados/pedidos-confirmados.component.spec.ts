import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosConfirmadosComponent } from './pedidos-confirmados.component';

describe('PedidosConfirmadosComponent', () => {
  let component: PedidosConfirmadosComponent;
  let fixture: ComponentFixture<PedidosConfirmadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosConfirmadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosConfirmadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
