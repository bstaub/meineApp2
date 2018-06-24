import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImgThumbComponent } from './my-img-thumb.component';

describe('MyImgThumbComponent', () => {
  let component: MyImgThumbComponent;
  let fixture: ComponentFixture<MyImgThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyImgThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImgThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
