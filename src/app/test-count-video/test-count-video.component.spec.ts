import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCountVideoComponent } from './test-count-video.component';

describe('TestCountVideoComponent', () => {
  let component: TestCountVideoComponent;
  let fixture: ComponentFixture<TestCountVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCountVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCountVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
