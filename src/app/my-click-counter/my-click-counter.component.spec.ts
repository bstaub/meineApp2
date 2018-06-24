import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClickCounterComponent } from './my-click-counter.component';

describe('MyClickCounterComponent', () => {
  let component: MyClickCounterComponent;
  let fixture: ComponentFixture<MyClickCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClickCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClickCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
