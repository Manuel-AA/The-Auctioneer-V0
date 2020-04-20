import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoIntroComponent } from './cuerpo-intro.component';

describe('CuerpoIntroComponent', () => {
  let component: CuerpoIntroComponent;
  let fixture: ComponentFixture<CuerpoIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuerpoIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
