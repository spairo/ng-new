import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNavbarComponent } from './detalle-navbar.component';

describe('DetalleNavbarComponent', () => {
  let component: DetalleNavbarComponent;
  let fixture: ComponentFixture<DetalleNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
