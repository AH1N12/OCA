package AH1N1.OCA.service;

import AH1N1.OCA.repo.FolderRepository;
import AH1N1.OCA.repo.NoteRepository;
import AH1N1.OCA.repo.entiity.Folder;
import AH1N1.OCA.repo.entiity.Note;
import AH1N1.OCA.utils.Helper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class NoteServiceImpl implements NoteService, Helper {

    private final NoteRepository noteRepository;
    private final FolderRepository folderRepository;

    @Override
    public Note getNote(Long noteId) {
        return noteRepository.findById(noteId).orElseThrow();
    }

    @Override
    public Note saveNote(Note noteDto) {
        Note note = noteRepository.save(noteDto);
        Folder folder = folderRepository.findById(noteDto.getParentFolderId()).orElseThrow();
        if (!folderContainsNote(folder, note)) {
            folder.addNote(note);
            folderRepository.save(folder);
        }
        return note;
    }
}
