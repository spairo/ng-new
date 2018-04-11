import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafoliosMosaicComponent } from './portafolios-mosaic.component';

describe('PortafoliosMosaicComponent', () => {
  let component: PortafoliosMosaicComponent;
  let fixture: ComponentFixture<PortafoliosMosaicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafoliosMosaicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafoliosMosaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
