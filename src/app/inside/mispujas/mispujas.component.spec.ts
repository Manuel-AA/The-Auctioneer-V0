import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MispujasComponent } from './mispujas.component';

describe('MispujasComponent', () => {
  let component: MispujasComponent;
  let fixture: ComponentFixture<MispujasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MispujasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MispujasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
