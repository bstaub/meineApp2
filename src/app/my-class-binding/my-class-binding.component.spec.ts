import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClassBindingComponent } from './my-class-binding.component';

describe('MyClassBindingComponent', () => {
  let component: MyClassBindingComponent;
  let fixture: ComponentFixture<MyClassBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClassBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
