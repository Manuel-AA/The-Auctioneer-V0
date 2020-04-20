import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSubastadorComponent } from './vista-subastador.component';

describe('VistaSubastadorComponent', () => {
  let component: VistaSubastadorComponent;
  let fixture: ComponentFixture<VistaSubastadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSubastadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSubastadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
