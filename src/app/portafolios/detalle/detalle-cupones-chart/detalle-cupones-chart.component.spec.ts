import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCuponesChartComponent } from './detalle-cupones-chart.component';

describe('DetalleCuponesChartComponent', () => {
  let component: DetalleCuponesChartComponent;
  let fixture: ComponentFixture<DetalleCuponesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCuponesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCuponesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
