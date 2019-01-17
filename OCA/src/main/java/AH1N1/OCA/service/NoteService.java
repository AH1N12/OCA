package AH1N1.OCA.service;

import AH1N1.OCA.model.NoteDto;
import AH1N1.OCA.repo.entiity.Note;
import org.springframework.stereotype.Service;

@Service
public interface NoteService {

    Note getNote(Long noteId);

    Note saveNote(Note note);
}
