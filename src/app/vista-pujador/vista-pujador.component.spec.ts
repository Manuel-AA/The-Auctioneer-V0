import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPujadorComponent } from './vista-pujador.component';

describe('VistaPujadorComponent', () => {
  let component: VistaPujadorComponent;
  let fixture: ComponentFixture<VistaPujadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPujadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPujadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
