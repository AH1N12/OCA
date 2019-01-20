package AH1N1.OCA.controller;

import AH1N1.OCA.model.NoteDto;
import AH1N1.OCA.repo.entiity.Folder;
import AH1N1.OCA.repo.entiity.Note;
import AH1N1.OCA.service.NoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "category/{categoryId}/folder/{folderId}/note")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class NoteController {

    private final NoteService noteService;

    @GetMapping(value = "/all")
    public List<Note> getAllNotesByFolderId(@PathVariable Long folderId){
        return noteService.getAllNotesByFolderId(folderId);
    }

    @PostMapping( produces = "application/json", consumes = "application/json")
    public Note createNewNoteInFolder(@PathVariable Long folderId, @Valid Note note){
        return noteService.createNewNoteInFolder(folderId, note);
    }

    @PutMapping(produces = "application/json", consumes = "application/json")
    public Note updateNoteInFolder(@PathVariable Long folderId, @Valid @RequestBody Note note) {
        return noteService.updateNoteInFolder(folderId, note);
    }
}
