package AH1N1.OCA.controller;

import AH1N1.OCA.repo.entiity.Folder;
import AH1N1.OCA.repo.entiity.Note;
import AH1N1.OCA.service.FolderService;
import AH1N1.OCA.service.NoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST})
public class MainController {

    private final FolderService folderService;
    private final NoteService noteService;

//    @GetMapping(value = "/folder/all", produces = "application/json")
//    public ResponseEntity<List<Folder>> getAllFolders() {
//        return new ResponseEntity<>(folderService.getAllFolders(), HttpStatus.OK);
//    }
//
//    @GetMapping(value = "/folder/{folderId}", produces = "application/json")
//    public ResponseEntity<Folder> getFolder(@PathVariable Long folderId) {
//        return new ResponseEntity<>(folderService.getFolder(folderId), HttpStatus.OK);
//    }

//    @PostMapping(value = "/folder/save", produces = "application/json", consumes = "application/json")
//    public ResponseEntity<Folder> saveFolder(@RequestBody @Valid Folder folder) {
//        return new ResponseEntity<>(folderService.saveFolder(folder), HttpStatus.OK);
//    }

//    @GetMapping(value = "/note/{noteId}", produces = "application/json")
//    public ResponseEntity<Note> getNote(@PathVariable Long noteId) {
//        return new ResponseEntity<>(noteService.getNote(noteId), HttpStatus.OK);
//    }
//
//    @PostMapping(value = "/note/save", produces = "application/json", consumes = "application/json")
//    public ResponseEntity<Note> saveNote(@RequestBody @Valid Note note) {
//        return new ResponseEntity<>(noteService.saveNote(note), HttpStatus.OK);
//    }
}
