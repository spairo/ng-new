import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafoliosListComponent } from './portafolios-list.component';

describe('PortafoliosListComponent', () => {
  let component: PortafoliosListComponent;
  let fixture: ComponentFixture<PortafoliosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafoliosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafoliosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
