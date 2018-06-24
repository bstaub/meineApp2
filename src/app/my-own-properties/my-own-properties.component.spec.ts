import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOwnPropertiesComponent } from './my-own-properties.component';

describe('MyOwnPropertiesComponent', () => {
  let component: MyOwnPropertiesComponent;
  let fixture: ComponentFixture<MyOwnPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOwnPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOwnPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
