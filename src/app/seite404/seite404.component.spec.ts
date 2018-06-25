import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seite404Component } from './seite404.component';

describe('Seite404Component', () => {
  let component: Seite404Component;
  let fixture: ComponentFixture<Seite404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seite404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seite404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
