import { TestBed } from '@angular/core/testing';

import { SelectedSongService } from './selected-song.service';

describe('SelectedSongServiceService', () => {
  let service: SelectedSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
