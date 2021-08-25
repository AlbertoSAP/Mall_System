import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedeAlquilerComponent } from './reportede-alquiler.component';

describe('ReportedeAlquilerComponent', () => {
  let component: ReportedeAlquilerComponent;
  let fixture: ComponentFixture<ReportedeAlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportedeAlquilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedeAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
