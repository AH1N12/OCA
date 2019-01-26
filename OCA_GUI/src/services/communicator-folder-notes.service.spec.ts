import { TestBed } from '@angular/core/testing';

import { CommunicatorFolderNotesService } from './communicator-folder-notes.service';

describe('CommunicatorFolderNotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommunicatorFolderNotesService = TestBed.get(CommunicatorFolderNotesService);
    expect(service).toBeTruthy();
  });
});
