import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTiendaComponent } from './vista-tienda.component';

describe('VistaTiendaComponent', () => {
  let component: VistaTiendaComponent;
  let fixture: ComponentFixture<VistaTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
