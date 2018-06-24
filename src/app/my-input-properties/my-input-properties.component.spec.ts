import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInputPropertiesComponent } from './my-input-properties.component';

describe('MyInputPropertiesComponent', () => {
  let component: MyInputPropertiesComponent;
  let fixture: ComponentFixture<MyInputPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInputPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInputPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
