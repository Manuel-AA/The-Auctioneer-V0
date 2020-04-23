import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocerComponent } from './conocer.component';

describe('ConocerComponent', () => {
  let component: ConocerComponent;
  let fixture: ComponentFixture<ConocerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConocerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
