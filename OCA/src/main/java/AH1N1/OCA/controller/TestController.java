package AH1N1.OCA.controller;

import AH1N1.OCA.repo.CategoryReposiotory;
import AH1N1.OCA.repo.FolderRepository;
import AH1N1.OCA.repo.NoteRepository;
import AH1N1.OCA.repo.entiity.Category;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class TestController {

//    private final FolderRepository folderRepository;
//    private final NoteRepository noteRepository;
//    private final CategoryReposiotory categoryReposiotory;
//
//    @GetMapping("/test")
//    public void test() {
//        Category c = new Category(null, "Kategoria", null);
//        categoryReposiotory.save(c);
//    }
}
