import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIfComponent } from './my-if.component';

describe('MyIfComponent', () => {
  let component: MyIfComponent;
  let fixture: ComponentFixture<MyIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
