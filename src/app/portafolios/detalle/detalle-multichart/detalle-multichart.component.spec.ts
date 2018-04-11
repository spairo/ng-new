import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMultichartComponent } from './detalle-multichart.component';

describe('DetalleMultichartComponent', () => {
  let component: DetalleMultichartComponent;
  let fixture: ComponentFixture<DetalleMultichartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleMultichartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMultichartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
