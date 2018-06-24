import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClickComponent } from './my-click.component';

describe('MyClickComponent', () => {
  let component: MyClickComponent;
  let fixture: ComponentFixture<MyClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
