import { TestBed, inject } from '@angular/core/testing';

import { VideoDBService } from './video-db.service';

describe('VideoDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoDBService]
    });
  });

  it('should be created', inject([VideoDBService], (service: VideoDBService) => {
    expect(service).toBeTruthy();
  }));
});
