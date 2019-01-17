//package AH1N1.OCA.controller;
//
//import AH1N1.OCA.repo.FolderRepository;
//import AH1N1.OCA.repo.NoteRepository;
//import AH1N1.OCA.repo.entiity.Folder;
//import AH1N1.OCA.repo.entiity.Note;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.HashSet;
//
//@RestController
//@RequiredArgsConstructor(onConstructor = @__(@Autowired))
//public class TestController {
//
//    private final FolderRepository folderRepository;
//    private final NoteRepository noteRepository;
//
//    @GetMapping("/test")
//    public void test() {
//        Folder folder = new Folder(null, "tytul", new HashSet<>());
//        Folder f1 = folderRepository.save(folder);
//        System.out.println(folderRepository.findById(f1.getId()));
//
//
//        Note n1 = noteRepository.save(new Note(null, "tit", "tex"));
//        f1.addNote(n1);
//        Folder f2 = folderRepository.save(f1);
//        System.out.println(folderRepository.findById(f2.getId()));
//
//        Note n2 = noteRepository.findById(n1.getId()).get();
//        n2.setTittle("new tittle");
//        noteRepository.save(n2);
//        System.out.println(folderRepository.findById(f2.getId()));
//
////        Folder folder1 = folderRepository.save(folder);
////        System.out.println();
////        Folder folder2 = folderRepository.findById(folder1.getId()).get();
////        Folder folder3 = folderRepository.save(new Folder(161L, "nowyTytul",null));
////        Folder folder4 = folderRepository.findById(folder3.getId()).get();
////
////        System.out.println(folder1);
////        System.out.println(folder2);
////        System.out.println(folder3);
////        System.out.println(folder4);
////
////
////
////        Note note = new Note(null, folder3, "aa", "bb");
////
////        Note note1 = noteRepository.save(note);
////        Folder folder5 = folderRepository.findById(folder3.getId()).get();
////
////        System.out.println(note);
////        System.out.println(note1);
////        System.out.println(folder5);
////
////        Note note3 = noteRepository.save(note);
////        Set<Note> set = new HashSet<>();
////        set.add(note3);
////        Folder folder6 = folderRepository.findById(folder3.getId()).get();
////        folder6.setNotes(set);
////        Folder folder7 = folderRepository.save(folder6);
////        System.out.println(folderRepository.findById(folder7.getId()).get());
//
//    }
//}
