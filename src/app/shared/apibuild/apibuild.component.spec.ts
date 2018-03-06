import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApibuildComponent } from './apibuild.component';

describe('ApibuildComponent', () => {
  let component: ApibuildComponent;
  let fixture: ComponentFixture<ApibuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApibuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApibuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
