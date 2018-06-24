import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEventEmitterComponent } from './my-event-emitter.component';

describe('MyEventEmitterComponent', () => {
  let component: MyEventEmitterComponent;
  let fixture: ComponentFixture<MyEventEmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEventEmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
