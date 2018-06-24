import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStyleBindingComponent } from './my-style-binding.component';

describe('MyStyleBindingComponent', () => {
  let component: MyStyleBindingComponent;
  let fixture: ComponentFixture<MyStyleBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStyleBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
