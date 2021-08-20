import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregartiendaComponent } from './agregartienda.component';

describe('AgregartiendaComponent', () => {
  let component: AgregartiendaComponent;
  let fixture: ComponentFixture<AgregartiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregartiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregartiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
