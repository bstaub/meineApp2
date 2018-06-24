import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormKeyupEventComponent } from './my-form-keyup-event.component';

describe('MyFormKeyupEventComponent', () => {
  let component: MyFormKeyupEventComponent;
  let fixture: ComponentFixture<MyFormKeyupEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormKeyupEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormKeyupEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
