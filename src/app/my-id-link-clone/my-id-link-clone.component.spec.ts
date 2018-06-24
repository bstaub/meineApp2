import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIdLinkCloneComponent } from './my-id-link-clone.component';

describe('MyIdLinkCloneComponent', () => {
  let component: MyIdLinkCloneComponent;
  let fixture: ComponentFixture<MyIdLinkCloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIdLinkCloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIdLinkCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
