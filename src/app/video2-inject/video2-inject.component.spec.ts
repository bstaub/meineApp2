import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Video2InjectComponent } from './video2-inject.component';

describe('Video2InjectComponent', () => {
  let component: Video2InjectComponent;
  let fixture: ComponentFixture<Video2InjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Video2InjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Video2InjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
