package AH1N1.OCA.service;

import AH1N1.OCA.model.NoteDto;
import AH1N1.OCA.repo.FolderRepository;
import AH1N1.OCA.repo.NoteRepository;
import AH1N1.OCA.repo.entiity.Note;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class NoteService /*implements NoteService, Helper*/ {

    private final NoteRepository noteRepository;
    private FolderRepository folderRepository;


    public List<Note> getAllNotesByFolderId(Long folderId) {
        return noteRepository.findByFolderId(folderId);
    }

    public Note createNewNoteInFolder(Long folderId, Note note) {
        return folderRepository.findById(folderId).map(folder -> {
            note.setFolder(folder);
            note.setId(null);
            return noteRepository.save(note);
        }).orElseThrow(() -> new RuntimeException("FolderId " + folderId + " not found"));
    }

    public Note updateNoteInFolder(Long folderId, Note note) {
        if (!folderRepository.existsById(folderId)) throw new RuntimeException("FolderId " + folderId + " not found");

        if (Objects.isNull(note.getId())) throw new RuntimeException("NoteId can not be null");
        return noteRepository.findById(note.getId()).map(noteFound -> {
            noteFound.setValue(note.getValue());
            return noteRepository.save(noteFound);
        }).orElseThrow(() -> new RuntimeException("NoteId " + note.getId() + " not found"));
    }
}
